import React from 'react';

class ProfilePics extends React.Component {
    constructor (props) {
        super(props)
        this.capitalize = this.capitalize.bind(this);
    }

    capitalize (word) {
        return word[0].toUpperCase() + word.slice(1);
    }

    render () {
        const { currentUser } = this.props;
        let coverUrl = window.coverURL;
        let profileUrl = window.profileURL;
        console.log(coverUrl)
        if (currentUser.coverUrl) {
            coverUrl = currentUser.coverUrl; 
        } 
        if (currentUser.profileUrl) {
            profileUrl = currentUser.profileUrl
        }
        return (
            <div className="pic-container">
                <img className="cover-pic" src={coverUrl} />
                <img className="profile-pic" src={profileUrl} />
                <h1>{`${this.capitalize(currentUser.first_name)} ${this.capitalize(currentUser.surname)}`}</h1>
            </div>
        )
    }
}

export default ProfilePics;