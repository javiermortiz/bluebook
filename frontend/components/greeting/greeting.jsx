import React from 'react';
import LoginFormContainer from "../session_form/login_form_container";
import SignupFormContainer from "../session_form/signup_form_container";
import { AuthRoute } from '../../util/route_util';
import Profile from '../profile/profile';

class Greeting extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        if (this.props.currentUser) {
            return (
                <Profile currentUser={this.props.currentUser} logout={this.props.logout}/>
            )
        } else {
            return (
                <div className="welcome_page">
                    <AuthRoute path="/" component={LoginFormContainer} />
                    <AuthRoute path="/" component={SignupFormContainer} />  
                </div>
            )
        }
    }
}

export default Greeting;