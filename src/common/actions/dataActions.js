import axios from 'axios';
import {
    SUCCESS_FETCH,
    FAIL_FETCH
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