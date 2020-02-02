import * as PostAPIUtil from '../util/posts_api_util';

export const RECEIVE_POSTS = "RECEIVE_POSTS";

const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts 
});

export const fetchPosts = () => dispatch => (
    PostAPIUtil.fetchPosts()
        .then(posts => {
            return dispatch(receivePosts(posts))
        })
);

window.fetchPosts = fetchPosts;