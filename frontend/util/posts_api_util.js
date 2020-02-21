export const fetchTimelinePosts = userId => {
    return $.ajax({
        method: "GET",
        url: `/api/users/${userId}/posts`
    })
};

export const fetchNewsfeedPosts = () => {
    return $.ajax({
        method: "GET",
        url: "/api/posts/newsfeed"
    })
}

export const createPost = post => {
    return $.ajax({
        method: 'POST',
        url: `/api/users/${post.for_user_id}/posts`,
        data: { post } 
    });
};

export const deletePost = postInfo => {
    return $.ajax({
        method: "DELETE",
        url: `/api/users/${postInfo.for_user_id}/posts/${postInfo.postId}`
    })
};