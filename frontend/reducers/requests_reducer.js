import { RECEIVE_REQUEST, DELETE_REQUEST } from '../actions/request_actions';

const RequestsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_REQUEST:
            return Object.assign({}, state, action.request);
        case DELETE_REQUEST:
            const nextState = Object.assign({}, state);
            delete nextState[action.request.id];
            return nextState;
        default:
            return state;
    }
};

export default RequestsReducer;