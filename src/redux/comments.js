import * as ActionTypes from './ActionTypes';

export const Comments = (state = {
    errorMessage: null,
    comments: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            return {...state, comments: state.comments.concat(action.payload)};
        case ActionTypes.DISHES_FAILED:
            return {
                ...state,
                errorMessage: action.payload
            }
        case ActionTypes.ADD_COMMENTS:
                return {
                    ...state,
                    errorMessage: null,
                    comments: action.payload
                }
        default:
            return state;
    }
}