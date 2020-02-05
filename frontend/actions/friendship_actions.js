import * as FriendshipAPIUtil from '../util/friendships_api_util';

export const CONFIRM_FRIENDSHIP = "CONFIRM_FRIENDSHIP";
export const CANCEL_FRIENDSHIP = "CANCEL_FRIENDSHIP";

const confirmFriendship = friendship => ({
    type: CONFIRM_FRIENDSHIP,
    friendship 
})

const cancelFriendship = friendshipId => ({
    type: CANCEL_FRIENDSHIP,
    friendshipId
})

export const createFriendship = friendship => dispatch => {
    return FriendshipAPIUtil.createFriendship(friendship)
        .then(receivedFriendship => dispatch(confirmFriendship(receivedFriendship)));
};

export const deleteFriendship = friendshipId => dispatch => {
    return FriendshipAPIUtil.deleteFriendship(friendshipId)
        .then(() => dispatch(cancelFriendship(friendshipId)));
};