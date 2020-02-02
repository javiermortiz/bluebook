import React from 'react';
import BluebarContainer from '../logged_in/bluebar_container';
import Profilebar from '../profile/profilebar';
import ProfilePics from './profile_pics';
import Details from './details';

class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount () {
        this.props.fetchUser(this.props.match.params.userId);
    }

    render () {
        debugger
        if (typeof this.props.user === 'undefined') {
            return <h1>Fetching user info...</h1>
        }
        return (
            <div>
                <BluebarContainer />
                <ProfilePics currentUser={this.props.user}/>
                <Profilebar currentUser={this.props.user} />
                <Details currentUser={this.props.user} />
            </div>
        )
    }
}

export default Profile;