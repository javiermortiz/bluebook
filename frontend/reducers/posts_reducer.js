import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST } from '../actions/post_actions';
import { merge } from 'lodash';

const PostReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_POSTS:
            return Object.assign({}, state, action.posts);
        case RECEIVE_POST:
            const newPost = Object.assign({}, state[action.post.for_user_id], { [action.post.id] : action.post } );
            return Object.assign({}, state, { [action.post.for_user_id]: newPost });
        case REMOVE_POST:
            const nextState = merge({}, state);
            delete nextState[action.post.for_user_id][action.post.id];
            return nextState;
        default:
            return state;
    }
};

export default PostReducer;