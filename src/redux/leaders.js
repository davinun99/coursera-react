import * as ActionTypes from './ActionTypes';
export const Leaders = (state = {
    leaders: [],
    isLoading: false,
    message: null
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LEADERS:
            return{
                isLoading: false,
                message: null,
                leaders: action.payload
            };
        case ActionTypes.LEADERS_FAILED:
            return{
                isLoading: false,
                message: action.payload,
                leaders: []
            };
        case ActionTypes.LEADERS_LOADING:
            return{
                isLoading: true,
                message: null,
                leaders: []
            }
        default:
            return state;
    }
}