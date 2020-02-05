import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_REQUEST, DELETE_REQUEST } from '../actions/request_actions';
import { CANCEL_FRIENDSHIP } from '../actions/friendship_actions';

const UsersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign(
                {}, 
                state, 
                { [action.currentUser.id]: action.currentUser}
            );
        case RECEIVE_USER:
            return Object.assign(
                {},
                state,
                { [action.user.id]: action.user }
            );
        case RECEIVE_REQUEST:
            return Object.assign({}, state, action.users);
        case DELETE_REQUEST:
            return Object.assign({}, state, action.users);
        case CANCEL_FRIENDSHIP:
            return Object.assign({}, state, action.users);
        default:
            return state;
    }
};

export default UsersReducer;