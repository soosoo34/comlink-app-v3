import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { InMemoryMandatsApi } from '@features/mandats/adapters/secondary/in-memory/in-memory-mandats-api';
import { MandatBuilder } from '@features/mandats/domain/entities/mandat.builder';
import { MandatApiPort } from '@features/mandats/domain/ports/api/mandat-api.port';
import { LoadSilenceMandats } from '@features/mandats/domain/redux/actions/mandats.action';
import { MandatState } from '@features/mandats/domain/redux/state/mandats.state';
import { NgxsModule, Store } from '@ngxs/store';

describe('Mandats Action', () => {
  let store: Store;
  let mandatsApi: InMemoryMandatsApi;
  const mandatBuilder = new MandatBuilder();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([MandatState]), HttpClientTestingModule],
      providers: [
        {
          provide: MandatApiPort,
          useClass: InMemoryMandatsApi,
        },
      ],
    });
    store = TestBed.inject(Store);
    mandatsApi = TestBed.inject(MandatApiPort) as InMemoryMandatsApi;
  });

  it('should retrieve mandats', () => {
    const mandat = mandatBuilder.build();
    const mandatSecond = mandatBuilder.withId(2).build();
    mandatsApi.feedMandats(mandat);
    mandatsApi.feedMandats(mandatSecond);

    store.dispatch(new LoadSilenceMandats()).subscribe(() => {
      const actual = store.selectSnapshot(state => state.mandats);
      expect(actual).toEqual({
        mandats: [mandat, mandatSecond],
        mandatSelection: [],
        archivedMandats: [],
      });
    });
  });
});
