import { connect } from "react-redux"
import FriendshipStatus from './friendship_status';
import { makeRequest, cancelRequest } from '../../actions/request_actions';
import { fetchUser } from '../../actions/user_actions';
import { createFriendship, deleteFriendship} from '../../actions/friendship_actions';

const mapStateToProps = (state, ownProps) => {
    return {
    currentUser: state.entities.users[state.session.id],
    friendsWith: state.entities.users[state.session.id].friends_with,
    initiatedRequestsWith: state.entities.users[state.session.id].initiated_requests_with,
    requestsToApproveFrom: state.entities.users[state.session.id].requests_to_approve_from,
    initiatedRequests: state.entities.users[state.session.id].initiated_requests,
    requestsToApprove: state.entities.users[state.session.id].requests_to_approve,
    friendships: state.entities.users[state.session.id].friendships,
    friendshipsRepeated: state.entities.users[state.session.id].friendships_repeated
}}

const mapDispatchToProps = dispatch => ({
    makeRequest: request => dispatch(makeRequest(request)),
    cancelRequest: requestId => dispatch(cancelRequest(requestId)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    confirmFriendship: friendship => dispatch(createFriendship(friendship)),
    deleteFriendship: friendshipId => dispatch(deleteFriendship(friendshipId))
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendshipStatus);