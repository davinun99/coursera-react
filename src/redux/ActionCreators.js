import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl';
import fetch from 'cross-fetch';

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});
export const postComment = (dishId, rating ="1", author, comment) => (dispatch) => {
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    };
    newComment.date = new Date().toISOString();
    return fetch(baseUrl + 'comments',{
        method: 'POST',
        body: JSON.stringify(newComment),
        headers:{
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    }).then(response =>{
        if (response.ok){
            return response;
        }
        var error = new Error('Error: ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
    }, error => {
        throw error;
    })
    .then(response=> response.json())
    .then(comment=>dispatch(addComment(comment)))
    .catch(error => {
        console.error(error);
    });
}
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));
    return fetch(baseUrl + 'dishes')
    .then(response =>{
        if (response.ok){
            return response;
        }
        var error = new Error('Error: ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
    }, error => {
        var error = new Error(error.message);
        throw error;
    })
    .then(response=> response.json())
    .then(dishes=> dispatch(addDishes(dishes)))
    .catch(error =>dispatch(dishesFailed(error.message)));
}

export const dishesLoading = () =>({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errorMessage)=>({
    type: ActionTypes.DISHES_FAILED,
    payload: errorMessage
});
export const promosFailed = (errorMessage)=>({
    type: ActionTypes.PROMOS_FAILED,
    payload: errorMessage
});

export const commentsFailed = (errorMessage)=>({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errorMessage
});

export const addDishes = (dishes)=>({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
    .then(response =>{
        if (response.ok){
            return response;
        }
        var error = new Error('Error: ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
    }, error => {
        var error = new Error(error.message);
        throw error;
    })
    .then(response=> response.json())
    .then(comments=> dispatch(addComments(comments)))
    .catch(error =>dispatch(commentsFailed(error.message)));
}

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));
    return fetch(baseUrl + 'promotions')
    .then(response =>{
        if (response.ok){
            return response;
        }
        var error = new Error('Error: ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
    }, error => {
        var error = new Error(error.message);
        throw error;
    })
    .then(response=> response.json())
    .then(promos=> dispatch(addPromos(promos)))
    .catch(error =>dispatch(promosFailed(error.message)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const addPromos = (promos)=>({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});

export const addComments = (comments)=>({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});
