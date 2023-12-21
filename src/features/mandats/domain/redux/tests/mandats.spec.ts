import { TestBed } from '@angular/core/testing';
import { InMemoryMandatsApi } from '@features/mandats/adapters/secondary/in-memory/in-memory-mandats-api';
import { MandatBuilder } from '@features/mandats/domain/entities/mandat.builder';
import { MandatApiPort } from '@features/mandats/domain/ports/api/mandat-api.port';
import { LoadSilenceMandats } from '@features/mandats/domain/redux/actions/mandats.action';
import { MandatsSelectors } from '@features/mandats/domain/redux/selectors/mandats.selectors';
import { MandatState } from '@features/mandats/domain/redux/state/mandats.state';
import { NgxsModule, Store } from '@ngxs/store';
import { firstValueFrom } from 'rxjs';

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
    mandatsApi.feedMandats(mandat);
    await firstValueFrom(store.dispatch(new LoadSilenceMandats()));
    const mandats = store.selectSnapshot(MandatsSelectors.mandats);
    expect(store.selectSnapshot(state => state.mandats)).toEqual({
      mandats: [mandat],
      mandatSelection: [],
    });
  });
});
