import { HTTP } from './../utils/HTTP';

import {
    GET_SHIPMENTS_REQUEST,
    GET_SHIPMENTS_SUCCESS,
    GET_SHIPMENTS_FAILED,
    UPDATE_SHIPMENTS_PAGE,
    ORDER_BY_SHIPMENTS,
    GET_SEARCH_DATA_REQUEST,
    GET_SEARCH_DATA_SUCCESS,
    GET_SEARCH_DATA_FAILED
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
};

export const updatePage = (skip) => (dispatch) => {
    dispatch({
        type: UPDATE_SHIPMENTS_PAGE,
        data: skip
    });
    return Promise.resolve(true);
};

export const orderShipmentsBy = (value) => (dispatch) => {
    dispatch({
        type: ORDER_BY_SHIPMENTS,
        data: value
    })
};

export const getSearchData = (value) => (dispatch) => {
    dispatch({
        type: GET_SEARCH_DATA_REQUEST
    });
    return new Promise((resolve, reject) => {
        HTTP('get', '/shipments',null,null,{id:value})
            .then((response) => {
                dispatch({
                    type: GET_SEARCH_DATA_SUCCESS,
                    data: response.data
                });
                resolve(response.data);
            })
            .catch(error => {
                dispatch({
                    type: GET_SEARCH_DATA_FAILED,
                    error: error
                });
                reject(error);
            });
    })
};
