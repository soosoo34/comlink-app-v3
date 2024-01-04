import { TestBed } from '@angular/core/testing';
import { InMemoryMandatsApi } from '@features/mandats/adapters/secondary/in-memory/in-memory-mandats-api';
import { MandatBuilder } from '@features/mandats/domain/entities/mandat.builder';
import { MandatStateEnum } from '@features/mandats/domain/entities/mandat.interface';
import { MandatApiPort } from '@features/mandats/domain/ports/api/mandat-api.port';
import { LoadSilenceMandats } from '@features/mandats/domain/redux/actions/mandats.actions';
import { MandatState } from '@features/mandats/domain/redux/state/mandats.state';
import { NgxsModule, Store } from '@ngxs/store';
import { firstValueFrom, lastValueFrom } from 'rxjs';

describe('Mandats Action', () => {
  let store: Store;
  const mandatBuilder = new MandatBuilder();
  let mandatsApi: InMemoryMandatsApi;

  beforeEach(() => {
    mandatsApi = new InMemoryMandatsApi();
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([MandatState])],
      providers: [
        {
          provide: MandatApiPort,
          useValue: mandatsApi,
        },
      ],
    });
    store = TestBed.inject(Store);
  });

  it('should load mandats', async () => {
    const mandat = mandatBuilder.build();
    mandatsApi.feedMandats([mandat]);
    await firstValueFrom(store.dispatch(new LoadSilenceMandats()));
    expect(store.selectSnapshot(state => state.mandats)).toEqual({
      mandats: [mandat],
      mandatSelection: [],
    });
  });

  it('should not add mandat if mandat is in prospection', async () => {
    mandatsApi.clearMandats();
    const mandat = mandatBuilder
      .withEtat(MandatStateEnum.prospection)
      .withId(5)
      .build();
    const mandat2 = mandatBuilder
      .withEtat(MandatStateEnum.active)
      .withId(1)
      .build();
    mandatsApi.feedMandats([mandat, mandat2]);

    await lastValueFrom(store.dispatch(new LoadSilenceMandats()));
    expect(store.selectSnapshot(state => state.mandats)).toEqual({
      mandats: [mandat2],
      mandatSelection: [],
    });
  });
});
