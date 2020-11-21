import {combineReducers, createStore, applyMiddleware} from 'redux';
import {Dishes} from './dishes';
import {Comments} from './comments';
import {Leaders} from './leaders';
import {Promotions} from './promotions';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {createForms} from 'react-redux-form';
import { initialFeedBack } from './forms';
export const ConfigureStore =  () => {
    return createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            leaders: Leaders,
            promotions: Promotions,
            ...createForms({
                feedback:initialFeedBack
            })
        }),
        applyMiddleware(thunk, logger)
    );
}