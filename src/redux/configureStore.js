import {createStore} from 'redux';
import {initialState, initialStatem, Reducer} from './reducer';

export const ConfigureStore =  () => {
    return createStore(Reducer, initialState);
}