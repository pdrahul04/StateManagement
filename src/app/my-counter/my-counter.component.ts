import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { decrement, increment, reset } from '../store/counter.actions';
import { CounterState } from '../store/counter.reducer';

@Component({
  selector: 'app-my-counter',
  imports: [AsyncPipe],
  templateUrl: './my-counter.component.html',
  styleUrl: './my-counter.component.css'
})
export class MyCounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: CounterState }>) {
    this.count$ = this.store.select(state => state.count.count);
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
