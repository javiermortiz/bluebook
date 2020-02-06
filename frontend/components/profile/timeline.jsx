import React from "react";

class Timeline extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPosts(this.props.user.id);
    };

    componentDidUpdate(prevProps) {
        const userId = this.props.currentUser.id
        if (prevProps.currentUser.id !== userId) {
            this.props.fetchPosts(userId);
        }
    }

    render() {
        if (this.props.posts === undefined) {
            return <h1>Fetching posts</h1>
        }
        return (
            <div className="timeline">
                <ul className="timeline-list">
                    {Object.values(this.props.posts).map(post => <li>{post.body}</li>)}
                </ul>
            </div>
        )
    }
}

export default Timeline;