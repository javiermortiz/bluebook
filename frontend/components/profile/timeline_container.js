import { connect } from "react-redux";
import Timeline from "./timeline";
import {fetchUserPosts} from "../../actions/post_actions";

const mapStateToProps = (state, ownProps) => ({
    user: state.entities.users[ownProps.currentUser.id],
    posts: state.entities.posts[ownProps.currentUser.id]
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: userId => dispatch(fetchUserPosts(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);