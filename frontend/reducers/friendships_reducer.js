import { CONFIRM_FRIENDSHIP, CANCEL_FRIENDSHIP} from '../actions/friendship_actions';

const FriendshipsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case CONFIRM_FRIENDSHIP:
            return Object.assign({}, state, action.friendship);
        case CANCEL_FRIENDSHIP:
            const nextState = Object.assign({}, state);
            delete nextState[action.friendship.id];
            return nextState;
        default:
            return state;
    }
};

export default FriendshipsReducer;