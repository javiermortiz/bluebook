import React from 'react';
import LoginFormContainer from "../session_form/login_form_container";
import SignupFormContainer from "../session_form/signup_form_container";
import { AuthRoute } from '../../util/route_util';
import Bluebar from '../logged_in/bluebar';
import Profilebar from '../logged_in/profilebar';

class Greeting extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        if (this.props.currentUser) {
            return (
                <div>
                    <Bluebar currentUser={this.props.currentUser} logout={this.props.logout}/>
                    <Profilebar currentUser={this.props.currentUser} />
                </div>
            )
        } else {
            return (
                <div className="welcome_page">
                    <AuthRoute path="/" component={LoginFormContainer} />
                    <div className="global_container">
                        <div className="world_map">

                        </div>
                        <AuthRoute path="/" component={SignupFormContainer} />
                    </div>
                    
                </div>
            )
        }
    }
}

export default Greeting;