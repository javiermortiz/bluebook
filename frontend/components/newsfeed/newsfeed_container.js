import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Newsfeed from './newsfeed';
import { fetchNewsfeedPosts } from '../../actions/post_actions';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    posts: state.entities.posts
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchNewsfeedPosts: () => dispatch(fetchNewsfeedPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Newsfeed);