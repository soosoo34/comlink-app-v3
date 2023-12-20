import { Component } from '@angular/core';
import { LoadSilenceMandats } from '@features/mandats/domain/redux/actions/mandats.action';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-mandats-container',
  templateUrl: './mandats-container.component.html',
  styleUrl: './mandats-container.component.scss',
})
export class MandatsContainerComponent {
  constructor(private store: Store) {
    this.store.dispatch(new LoadSilenceMandats());
  }
}
