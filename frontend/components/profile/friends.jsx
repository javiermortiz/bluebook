import React from 'react';
import { Link } from 'react-router-dom';

const Friends = ({ currentUser }) => {
    // let profileUrl = window.profileURL;
    // if (currentUser.profileUrl) {
    //     profileUrl = currentUser.profileUrl
    // }
    return (
        <div className="friends">
            <div className="friends-title">Friends</div>
            <ul className="friends-list">
                {'friends' in currentUser && Object.values(currentUser.friends).map(friend => {
                    return (
                        <li>
                            <Link to={`/${friend.id}`}>
                                <img src={friend.profileUrl} className="friend-img"/>
                                <div className="friend-name">
                                    {`${friend.first_name} ${friend.surname}`}
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

export default Friends;