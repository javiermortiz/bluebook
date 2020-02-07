import { connect } from "react-redux";
import Posts from "./posts";
import { fetchUserPosts, deletePost } from "../../actions/post_actions";
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => ({
    user: state.entities.users[ownProps.currentUser.id],
    posts: state.entities.posts[ownProps.currentUser.id],
    currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: userId => dispatch(fetchUserPosts(userId)),
    deletePost: postInfo => dispatch(deletePost(postInfo)),
    fetchUser: userId => dispatch(fetchUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);