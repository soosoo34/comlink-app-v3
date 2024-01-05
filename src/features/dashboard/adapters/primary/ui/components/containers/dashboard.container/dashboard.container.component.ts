import {Component} from '@angular/core';
import {LoadSilenceBuyers} from '@features/buyers/domain/redux/actions/buyers.action';
import {LoadSilenceArchivedMandats} from '@features/mandats/domain/redux/actions/archived-mandats.actions';
import {LoadSilenceMandats} from '@features/mandats/domain/redux/actions/mandats.actions';
import {LoadSilenceSalePoints} from '@features/sale-points/domain/redux/actions/sale-points.action';
import {Store} from '@ngxs/store';

@Component({
  selector: 'app-dashboard.container',
  templateUrl: './dashboard.container.component.html',
  styleUrl: './dashboard.container.component.scss',
})
export class DashboardContainerComponent {
  constructor(private store: Store) {
    this.store.dispatch(new LoadSilenceMandats());
    this.store.dispatch(new LoadSilenceArchivedMandats());
    this.store.dispatch(new LoadSilenceSalePoints());
    this.store.dispatch(new LoadSilenceBuyers());
  }
}
