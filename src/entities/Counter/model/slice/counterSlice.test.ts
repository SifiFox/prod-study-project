import { counterReducer, counterActions } from './counterSlice';
import { CounterSchema } from '../types/CounterSchema';

describe('counterSlice', () => {
    test('', () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state as CounterSchema, counterActions.decrement())).toEqual({ value: 9 });
    });
});

describe('counterSlice', () => {
    test('', () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state as CounterSchema, counterActions.increment())).toEqual({ value: 11 });
    });
});

describe('counterSlice empty state', () => {
    test('', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
    });
});
