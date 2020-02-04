import React from 'react';
import LoginFormContainer from "../session_form/login_form_container";
import SignupFormContainer from "../session_form/signup_form_container";
import { AuthRoute } from '../../util/route_util';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProfileContainer from '../profile/profile_container';
import NewsfeedContainer from '../newsfeed/newsfeed_container';
import Homepage from '../homepage/homepage'

class Greeting extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        if (this.props.currentUser) {
            return (
                <Switch>
                    {/* <Route path="/" render={(this.props) => <Bluebar {...props} title={`Props through render`} />} /> */}
                    {/* <Route path="/" component={Bluebar} currentUser={this.props.currentUser} logout={this.props.logout} /> */}
                    <Route exact path="/" component={NewsfeedContainer} />
                    <Route path="/:userId" component={ProfileContainer} />
                </Switch>
                // <Bluebar currentUser={this.props.currentUser} logout={this.props.logout} />
                // <Profile currentUser={this.props.currentUser} logout={this.props.logout}/>
            )
        } else {
            return (
                <Switch>
                    <AuthRoute exact path='/' component={Homepage} />
                    <Redirect to='/' />
                </Switch>
                
            )
        }
    }
}

export default Greeting;