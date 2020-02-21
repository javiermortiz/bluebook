import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';
import Profile from './profile';
import { fetchTimelinePosts } from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId],
    posts: state.entities.posts
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchTimelinePosts: userId => dispatch(fetchTimelinePosts(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);