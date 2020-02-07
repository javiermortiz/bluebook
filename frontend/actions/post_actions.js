import * as PostAPIUtil from '../util/posts_api_util';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";

const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts 
});

const receivePost = post => ({
    type: RECEIVE_POST,
    post 
});

const removePost = post => ({
    type: REMOVE_POST,
    post
});

export const fetchUserPosts = userId => dispatch => (
    PostAPIUtil.fetchUserPosts(userId)
        .then(posts => {
            return dispatch(receivePosts(posts))
        })
);

export const createPost = post => dispatch => (
    PostAPIUtil.createPost(post)
        .then(receivedPost => dispatch(receivePost(receivedPost)))
);

export const deletePost = postInfo => dispatch => (
    PostAPIUtil.deletePost(postInfo)
        .then(receivedPost => dispatch(removePost(receivedPost)))
);