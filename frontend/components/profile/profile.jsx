import React from 'react';
import Bluebar from '../logged_in/bluebar';
import Profilebar from '../profile/profilebar';
import ProfilePics from './profile_pics';

class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {

        return (
            <div>
                <Bluebar currentUser={this.props.currentUser} logout={this.props.logout} />
                <ProfilePics currentUser={this.props.currentUser}/>
                <Profilebar currentUser={this.props.currentUser} />
            </div>
        )
    }
}

export default Profile;