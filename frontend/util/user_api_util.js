export const fetchUser = userId => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${userId}`
    })
)

export const fetchUsers = profileId => (
    $.ajax({
        method: 'GET',
        url: ``
    })
)