import React from 'react';
import Bluebar from '../logged_in/bluebar';

class Newsfeed extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Bluebar currentUser={this.props.currentUser} logout={this.props.logout} />
        )
    }
}

export default Newsfeed;