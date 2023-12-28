import { TestBed } from '@angular/core/testing';
import { InMemoryMandatsApi } from '@features/mandats/adapters/secondary/in-memory/in-memory-mandats-api';
import { MandatBuilder } from '@features/mandats/domain/entities/mandat.builder';
import { MandatStateEnum } from '@features/mandats/domain/entities/mandat.interface';
import { MandatApiPort } from '@features/mandats/domain/ports/api/mandat-api.port';
import { AddProspectionMandatsWithoutApiCall } from '@features/mandats/domain/redux/actions/prospection-mandats.actions';
import { ProspectionMandatsState } from '@features/mandats/domain/redux/state/prospection-mandats.state';
import { NgxsModule, Store } from '@ngxs/store';

describe('Prospection Action', () => {
  let store: Store;
  const mandatBuilder = new MandatBuilder();
  let mandatsApi: InMemoryMandatsApi;

  beforeEach(() => {
    mandatsApi = new InMemoryMandatsApi();
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([ProspectionMandatsState])],
      providers: [
        {
          provide: MandatApiPort,
          useValue: mandatsApi,
        },
      ],
    });
    store = TestBed.inject(Store);
  });

  it('should add the mandat to the prospection list without api', () => {
    const mandat = mandatBuilder.withEtat(MandatStateEnum.prospection).build();
    store.dispatch(new AddProspectionMandatsWithoutApiCall([mandat]));
    expect(store.selectSnapshot(state => state.prospectionMandats)).toEqual({
      prospectionMandats: [mandat],
    });
  });
});
