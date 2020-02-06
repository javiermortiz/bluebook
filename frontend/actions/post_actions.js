import * as PostAPIUtil from '../util/posts_api_util';

export const RECEIVE_POSTS = "RECEIVE_POSTS";

const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts 
});

export const fetchUserPosts = userId => dispatch => (
    PostAPIUtil.fetchUserPosts(userId)
        .then(posts => {
            return dispatch(receivePosts(posts))
        })
);