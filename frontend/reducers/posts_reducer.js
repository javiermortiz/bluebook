import { RECEIVE_TIMELINE_POSTS, RECEIVE_POST, REMOVE_POST, RECEIVE_NEWSFEED_POSTS } from '../actions/post_actions';
import { merge } from 'lodash';

const PostReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_TIMELINE_POSTS:
            return Object.assign({}, action.posts);
        case RECEIVE_NEWSFEED_POSTS:
            return Object.assign({}, action.posts);
        case RECEIVE_POST:
            return Object.assign({}, state, { [action.post.id]: action.post });
        case REMOVE_POST:
            const nextState = Object.assign({}, state);
            delete nextState[action.post.id];
            return nextState;
        default:
            return state;
    }
};

export default PostReducer;