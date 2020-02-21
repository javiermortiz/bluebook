import React from 'react';
import BluebarContainer from '../logged_in/bluebar_container';
import Profilebar from '../profile/profilebar';
import ProfilePics from './profile_pics';
import Details from './details';
import Timeline from '../timeline/timeline';
import FriendshipStatusContainer from './friendship_status_container';
import Friends from './friends';
import PostFormContainer from '../profile/post_form_container';
import PostsContainer from '../profile/posts_container';

class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount () {
        this.props.fetchUser(this.props.match.params.userId);
        this.props.fetchTimelinePosts(this.props.match.params.userId);
    }

    componentDidUpdate (prevProps) {
        const userId = this.props.match.params.userId
        if (prevProps.match.params.userId !== userId){
            this.props.fetchUser(userId);
            this.props.fetchTimelinePosts(this.props.match.params.userId);
        }
    }

    render () {
        if (typeof this.props.user === 'undefined') {
            return <h1>Fetching user info...</h1>
        }
        return (
            <div className="profile-container">
                <BluebarContainer />
                <ProfilePics currentUser={this.props.user}/>
                <FriendshipStatusContainer currentProfile={this.props.user.id}/>
                <Profilebar currentUser={this.props.user} />
                <div className="details-timeline">
                    <div className="details-friends">
                        <Details currentUser={this.props.user} />
                        <Friends currentUser={this.props.user} />
                    </div>
                    
                    <div className="timeline">
                        <PostFormContainer currentUser={this.props.user} />
                        <div className="posts-title">Posts</div>
                        <PostsContainer currentUser={this.props.user} posts={this.props.posts}/>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Profile;