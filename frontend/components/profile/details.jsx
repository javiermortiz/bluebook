import React from 'react';

class Details extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="details-container">
                <h3>Details</h3>
                <ul className="details-list">
                    <li>Email: {this.props.currentUser.email}</li>
                    <li>Birthday: {this.props.currentUser.birthday}</li>
                    <li>Gender: {this.props.currentUser.gender}</li>
                    <li>Favorite color: blue</li>
                </ul>
            </div>
        )
    }
}

export default Details;