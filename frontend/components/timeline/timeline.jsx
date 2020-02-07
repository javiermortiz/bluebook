import React from 'react';
import PostFormContainer from '../profile/post_form_container';
import PostsContainer from '../profile/posts_container';

const Timeline = ({ currentUser }) => {
    return (
        <div className="timeline">
            <PostFormContainer currentUser={currentUser} />
            <div className="posts-title">Posts</div>
            <PostsContainer currentUser={currentUser} />
        </div>
    )
}

export default Timeline;