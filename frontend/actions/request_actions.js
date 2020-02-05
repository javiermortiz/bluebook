import * as RequestAPIUtil from '../util/requests_api_util';

export const RECEIVE_REQUEST = "RECEIVE_REQUEST";
export const DELETE_REQUEST = "DELETE_REQUEST";

const receiveRequest = payload => ({
    type: RECEIVE_REQUEST,
    request: payload.request,
    users: payload.users
});

const deleteRequest = payload => ({
    type: DELETE_REQUEST,
    request: payload.request,
    users: payload.users
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

