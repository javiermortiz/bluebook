import * as RequestAPIUtil from '../util/requests_api_util';

export const RECEIVE_REQUEST = "RECEIVE_REQUEST";
export const DELETE_REQUEST = "DELETE_REQUEST";

const receiveRequest = request => ({
    type: RECEIVE_REQUEST,
    request
});

const deleteRequest = request => ({
    type: DELETE_REQUEST,
    request
});

export const makeRequest = request => dispatch => (
    RequestAPIUtil.makeRequest(request)
        .then(receivedRequest => {
            return dispatch(receiveRequest(receivedRequest))
        })
);

export const cancelRequest = requestId => dispatch => (
    RequestAPIUtil.deleteRequest(requestId)
        .then(receivedRequest => (
            dispatch(deleteRequest(receivedRequest))
        ))
);

