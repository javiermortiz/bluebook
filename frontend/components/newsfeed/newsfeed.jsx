import React from 'react';
import Bluebar from '../logged_in/bluebar';
import Timeline from '../timeline/timeline';

class Newsfeed extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Bluebar currentUser={this.props.currentUser} logout={this.props.logout} />
                <div className="newsfeed">
                    <Timeline currentUser={this.props.currentUser} />
                </div>
            </div>
        )
    }
}

export default Newsfeed;