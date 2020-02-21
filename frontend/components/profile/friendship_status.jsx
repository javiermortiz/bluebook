import React from 'react';

class FriendshipStatus extends React.Component {
    constructor (props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
        this.deleteRequest = this.deleteRequest.bind(this);
        this.handleUnfriend = this.handleUnfriend.bind(this);
    }

    handleAdd (e) {
        e.preventDefault();
        const request = {
            status: "pending",
            started_by_user_id: this.props.currentUser.id,
            waiting_for_user_id: this.props.currentProfile
        }
        this.props.makeRequest(request);
        // this.props.fetchUser(this.props.currentUser.id);
    }

    deleteRequest () {
        let currentRequest;
        if (this.props.initiatedRequestsWith.includes(this.props.currentProfile)) {
            currentRequest = this.props.initiatedRequests[this.props.currentProfile];
            this.props.cancelRequest(currentRequest.id);
        } else {
            currentRequest = this.props.requestsToApprove[this.props.currentProfile];
            this.props.cancelRequest(currentRequest.id);
        }
        // this.props.fetchUser(this.props.currentUser.id);
    }

    handleDelete (e) {
        e.preventDefault();
        this.deleteRequest();
    }

    handleConfirm (e) {
        e.preventDefault();
        const newFriendship1 = {
            user_id: this.props.currentUser.id,
            friends_with_user_id: this.props.currentProfile
        };
        const newFriendship2 = {
            user_id: this.props.currentProfile, 
            friends_with_user_id: this.props.currentUser.id
        }
        this.props.confirmFriendship(newFriendship1);
        this.props.confirmFriendship(newFriendship2);
        this.deleteRequest();
    }

    handleUnfriend () {
        const friendshipId = this.props.friendships[this.props.currentProfile].id;
        const friendshipRepeatedId = this.props.friendshipsRepeated[this.props.currentProfile].id; 
        this.props.deleteFriendship(friendshipId);
        this.props.deleteFriendship(friendshipRepeatedId);
        // this.props.fetchUser(this.props.currentUser.id);
    }

    render () {
        if (this.props.currentProfile === this.props.currentUser.id) {
            return null;
        } else if (this.props.friendsWith.includes(this.props.currentProfile)) {
            return (
                <div className="friend-status">
                    <button className="friend-status-button">Friends</button>
                    <div className="friend-status-up-arrow"></div>
                    <ul className="friend-status-list">
                        <li><button onClick={this.handleUnfriend}>Unfriend</button></li>
                    </ul>
                </div>
            )
        } else if (this.props.initiatedRequestsWith.includes(this.props.currentProfile)) {
            return (
                <div className="friend-status">
                    <button className="friend-status-button">Friend Request Sent</button>
                    <div className="friend-status-up-arrow"></div>
                    <ul className="friend-status-list">
                        <li><button onClick={this.handleDelete}>Cancel Request</button></li>
                    </ul>
                </div>
            )
        } else if (this.props.requestsToApproveFrom.includes(this.props.currentProfile)){
            return (
                <div className="friend-status">
                    <button className="friend-status-button">Respond to Friend Request</button>
                    <div className="friend-status-up-arrow"></div>
                    <ul className="friend-status-list">
                        <li><button onClick={this.handleConfirm}>Confirm</button></li>
                        <li><button onClick={this.handleDelete}>Delete Request</button></li>
                    </ul>
                </div>
            )
        } else {
            return (
                <div className='friend-status'>
                    <button className="friend-status-button" onClick={this.handleAdd}>Add Friend</button>
                </div>
            )
        }
    }
}

export default FriendshipStatus;