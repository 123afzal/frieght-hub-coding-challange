import { HTTP } from './../utils/HTTP';

import {
    GET_SHIPMENTS_REQUEST,
    GET_SHIPMENTS_SUCCESS,
    GET_SHIPMENTS_FAILED,
    UPDATE_SHIPMENTS_PAGE
} from './../constants/actionTypes';


export const getShipments = () => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: GET_SHIPMENTS_REQUEST
        });
        HTTP('get', '/shipments')
            .then((response) => {
                dispatch({
                    type: GET_SHIPMENTS_SUCCESS,
                    data: response.data
                });
                resolve(response.data);
            })
            .catch(error => {
                dispatch({
                    type: GET_SHIPMENTS_FAILED,
                    error: error
                });
                reject(error);
            });
    });
}

export const updatePage = (skip) => (dispatch) => {
    dispatch({
        type: UPDATE_SHIPMENTS_PAGE,
        data: skip
    });
    return Promise.resolve(true);
}
