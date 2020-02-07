import { connect } from "react-redux";
import { createPost } from '../../actions/post_actions';
import PostForm from './post_form';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    currentProfile: ownProps.currentUser.id,
    friendsWith: state.entities.users[state.session.id].friends_with
})

const mapDispatchToProps = dispatch => ({
    createPost: post => dispatch(createPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);