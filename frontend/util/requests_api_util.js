export const makeRequest = friendship_request => {
    return $.ajax({
        method: "POST",
        url: "/api/friendship_requests",
        data: { friendship_request }
    })
};

export const fetchRequests = () => {
    return $.ajax({
        method: "GET",
        url: "/api/friendship_requests"
    })
};

export const deleteRequest = requestId => {
    return $.ajax({
        method: "DELETE",
        url: `/api/friendship_requests/${requestId}`
    })
}

window.makeRequest = makeRequest;
window.fetchRequests = fetchRequests;
window.deleteRequest = deleteRequest;