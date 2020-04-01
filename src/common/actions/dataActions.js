// import axios from 'axios';
import {
    SUCCESS_FETCH,
    FAIL_FETCH,
    INCREMENT,
    DECREMENT
} from './actionTypes';

export const sucessFetch = (payload, key) => ({
    type: SUCCESS_FETCH,
    key,
    payload
});

export const failFetch = (payload, key) => ({
    type: FAIL_FETCH,
    key,
    payload
});

export const increment = (payload) => ({
    type: INCREMENT,
    
    payload
});

export const decrement = (payload) => ({
    type: DECREMENT,
    payload
});