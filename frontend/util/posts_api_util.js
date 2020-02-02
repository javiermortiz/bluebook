export const fetchPosts = () => {
    return $.ajax({
        method: "GET",
        url: "/api/posts"
    })
};