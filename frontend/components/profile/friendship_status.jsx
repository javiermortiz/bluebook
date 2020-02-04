import React from 'react';

class FriendshipStatus extends React.Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {};
    }

    handleClick (e) {
        debugger
        e.preventDefault();
        const request = {
            status: "pending",
            started_by_user_id: this.props.currentUser.id,
            waiting_for_user_id: this.props.currentProfile
        }
        this.props.makeRequest(request);
        this.setState({});
    }

    render () {
        if (this.props.friendsWith.includes(this.props.currentProfile)) {
            return <h1>Friends</h1>
        } else if (this.props.currentProfile === this.props.currentUser.id) {
            return <h1>This is you</h1>
        } else if (this.props.initiatedRequestsWith.includes(this.props.currentProfile)) {
            return <h1>Waiting for approval</h1>
        } else if (this.props.requestsToApproveFrom.includes(this.props.currentProfile)){
            return <h1>Approve friendship</h1>
        } else {
            return <button onClick={this.handleClick}>Add Friend</button>;
        }
    }
}

export default FriendshipStatus;