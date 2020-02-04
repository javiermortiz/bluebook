import * as RequestAPIUtil from '../util/requests_api_util';

export const RECEIVE_REQUEST = "RECEIVE_REQUEST";

const receiveRequest = request => ({
    type: RECEIVE_REQUEST,
    request
});

export const makeRequest = request => dispatch => (
    RequestAPIUtil.makeRequest(request)
        .then(receivedRequest => {
            return dispatch(receiveRequest(receivedRequest))
        })
);

window.makeRequest = makeRequest;