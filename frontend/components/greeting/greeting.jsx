import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from "../session_form/login_form_container";
import SignupFormContainer from "../session_form/signup_form_container";
import { AuthRoute } from '../../util/route_util';

class Greeting extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        if (this.props.currentUser) {
            return (
                <div>
                    <h1>Welcome {this.props.currentUser.email}</h1>
                    <button onClick={this.props.logout}>Log Out</button>
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