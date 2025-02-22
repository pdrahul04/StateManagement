import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter.actions';

export interface CounterState {
    count: number;
  }
  
  export const initialState: CounterState = {
    count: 0
  };

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    console.log('Increment action triggered. Current state:', state);
    const newState = { ...state, count: state.count + 1 };
    console.log('New state after increment:', newState);
    return newState;
  }),
  on(decrement, (state) => {
    console.log('Decrement action triggered. Current state:', state);
    const newState = { ...state, count: state.count - 1 };
    console.log('New state after decrement:', newState);
    return newState;
  }),
  on(reset, (state) => {
    console.log('Reset action triggered. Current state:', state);
    const newState = { ...state, count: 0 };
    console.log('New state after reset:', newState);
    return newState;
  })
);