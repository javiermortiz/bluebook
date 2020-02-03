import React from 'react';
import BluebarContainer from '../logged_in/bluebar_container';
import Profilebar from '../profile/profilebar';
import ProfilePics from './profile_pics';
import Details from './details';
import TimelineContainer from './timeline_container';

class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount () {
        this.props.fetchUser(this.props.match.params.userId);
    }

    render () {
        if (typeof this.props.user === 'undefined') {
            return <h1>Fetching user info...</h1>
        }
        return (
            <div>
                <BluebarContainer />
                <ProfilePics currentUser={this.props.user}/>
                <Profilebar currentUser={this.props.user} />
                <div className="details-timeline">
                    <Details currentUser={this.props.user} />
                    <TimelineContainer currentUser={this.props.user} />
                </div>
                
            </div>
        )
    }
}

export default Profile;