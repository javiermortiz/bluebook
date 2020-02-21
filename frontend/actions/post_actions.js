import * as PostAPIUtil from '../util/posts_api_util';

export const RECEIVE_TIMELINE_POSTS = "RECEIVE_TIMELINE_POSTS";
export const RECEIVE_NEWSFEED_POSTS = "RECEIVE_NEWSFEED_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";

const receiveTimelinePosts = posts => ({
    type: RECEIVE_TIMELINE_POSTS,
    posts 
});

const receiveNewsfeedPosts = posts => ({
    type: RECEIVE_NEWSFEED_POSTS,
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

export const fetchTimelinePosts = userId => dispatch => (
    PostAPIUtil.fetchTimelinePosts(userId)
        .then(posts => {
            return dispatch(receiveTimelinePosts(posts))
        })
);

export const fetchNewsfeedPosts = () => dispatch => (
    PostAPIUtil.fetchNewsfeedPosts()
        .then(posts => dispatch(receiveNewsfeedPosts(posts)))
)
export const createPost = post => dispatch => (
    PostAPIUtil.createPost(post)
        .then(receivedPost => dispatch(receivePost(receivedPost)))
);

export const deletePost = postInfo => dispatch => (
    PostAPIUtil.deletePost(postInfo)
        .then(receivedPost => dispatch(removePost(receivedPost)))
);