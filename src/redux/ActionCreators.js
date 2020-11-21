import * as ActionTypes from './ActionTypes';

export const addComment = (dishId, rating ="1", author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId, rating, author, comment
    }
});