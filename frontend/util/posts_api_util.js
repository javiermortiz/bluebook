export const fetchUserPosts = userId => {
    return $.ajax({
        method: "GET",
        url: `/api/users/${userId}/posts`
    })
};