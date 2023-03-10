import { DECREMENT, INCREMENT, RESET } from '../constants/constants';

export function incrementCounter() {
    return {
        type: INCREMENT
    };
}

export function decrementCounter() {
    return {
        type: DECREMENT
    };
}

export function resetCounter() {
    return {
        type: RESET
    };
}
