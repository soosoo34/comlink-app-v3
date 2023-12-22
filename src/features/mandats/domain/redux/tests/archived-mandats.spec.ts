import { TestBed } from '@angular/core/testing';
import { InMemoryMandatsApi } from '@features/mandats/adapters/secondary/in-memory/in-memory-mandats-api';
import { MandatBuilder } from '@features/mandats/domain/entities/mandat.builder';
import { MandatApiPort } from '@features/mandats/domain/ports/api/mandat-api.port';
import { LoadSilenceArchivedMandats } from '@features/mandats/domain/redux/actions/archived-mandats.actions';
import { ArchivedMandatState } from '@features/mandats/domain/redux/state/archived-mandats.state';
import { NgxsModule, Store } from '@ngxs/store';
import { firstValueFrom } from 'rxjs';

describe('Mandats Action', () => {
  let store: Store;
  const mandatBuilder = new MandatBuilder();
  let mandatsApi: InMemoryMandatsApi;

  beforeEach(() => {
    mandatsApi = new InMemoryMandatsApi();
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([ArchivedMandatState])],
      providers: [
        {
          provide: MandatApiPort,
          useValue: mandatsApi,
        },
      ],
    });
    store = TestBed.inject(Store);
  });

  it('should load archived mandats', async () => {
    const mandat = mandatBuilder.build();
    mandatsApi.feedMandats(mandat);
    await firstValueFrom(store.dispatch(new LoadSilenceArchivedMandats()));
    expect(store.selectSnapshot(state => state.archivedMandats)).toEqual({
      archivedMandats: [mandat],
    });
  });
});
