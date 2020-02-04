import { connect } from "react-redux"
import FriendshipStatus from './friendship_status';
import { makeRequest } from '../../util/requests_api_util';

const mapStateToProps = (state, ownProps) => {
    return {
    currentUser: state.entities.users[state.session.id],
    friendsWith: state.entities.users[state.session.id].friends_with,
    initiatedRequestsWith: state.entities.users[state.session.id].initiated_requests_with,
    requestsToApproveFrom: state.entities.users[state.session.id].requests_to_approve_from
}}

const mapDispatchToProps = dispatch => ({
    makeRequest: request => dispatch(makeRequest(request))
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendshipStatus);