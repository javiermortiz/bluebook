import { RECEIVE_POSTS } from '../actions/post_actions';

const PostReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_POSTS:
            return Object.assign({}, state, action.posts);
        default:
            return state;
    }
};

export default PostReducer;