import {TestBed} from '@angular/core/testing';
import {InMemorySalePointsApi} from '@features/sale-points/adapters/secondary/in-memory/in-memory-sale-points-api';
import {SalePointBuilder} from '@features/sale-points/domain/entities/sale-point.builder';
import {SalePointInterface} from '@features/sale-points/domain/entities/sale-point.interface';
import {SalePointsApiPort} from '@features/sale-points/domain/ports/api/sale-points-api.port';
import {LoadSilenceSalePoints} from '@features/sale-points/domain/redux/actions/sale-points.action';
import {SalePointsState} from '@features/sale-points/domain/redux/state/sale-points.state';
import {NgxsModule, Store} from '@ngxs/store';
import {firstValueFrom} from 'rxjs';


describe('Sale points Action', () => {
  let store: Store;
  const salePointBuilder = new SalePointBuilder();
  let salePointsApi: InMemorySalePointsApi;

  beforeEach(() => {
    salePointsApi = new InMemorySalePointsApi();
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([SalePointsState])],
      providers: [
        {
          provide: SalePointsApiPort,
          useValue: salePointsApi,
        },
      ],
    });
    store = TestBed.inject(Store);
  });

  it('should load salePoints', async () => {
    const salePoint: SalePointInterface = salePointBuilder.build();
    salePointsApi.feedSalePoints([salePoint]);
    await firstValueFrom(store.dispatch(new LoadSilenceSalePoints()));
    expect(store.selectSnapshot(state => state.salePoints)).toEqual({
      salePoints: [salePoint],
    });
  });


});
