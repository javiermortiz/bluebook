import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const signup = user => dispatch => {
    APIUtil.signup(user)
        .then(user => {
                dispatch(receiveCurrentUser(user))
            }, err => {
                err.responseJSON.unshift('signup');
                return dispatch(receiveSessionErrors(err.responseJSON));
            }
        )
};

export const login = user => dispatch => {
    return APIUtil.login(user)
        .then(user => {
                return dispatch(receiveCurrentUser(user))
            }, err => {
                err.responseJSON.unshift('login');
                return dispatch(receiveSessionErrors(err.responseJSON))
            }
        )
};

export const logout = () => dispatch => (
    APIUtil.logout()
        .then(() => dispatch(logoutCurrentUser()))
);


window.login = login;