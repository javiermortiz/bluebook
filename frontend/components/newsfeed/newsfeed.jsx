import React from 'react';
import Bluebar from '../logged_in/bluebar';
import PostFormContainer from '../profile/post_form_container';
import PostsContainer from '../profile/posts_container';

class Newsfeed extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount () {
        this.props.fetchNewsfeedPosts();
    }

    render() {
        return (
            <div>
                <Bluebar currentUser={this.props.currentUser} logout={this.props.logout} />
                <div className="newsfeed">
                    <div className="timeline">
                        <PostFormContainer currentUser={this.props.currentUser} />
                        <div className="posts-title">Posts</div>
                        <PostsContainer currentUser={this.props.currentUser} posts={this.props.posts}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsfeed;