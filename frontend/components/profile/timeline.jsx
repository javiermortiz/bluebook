import React from "react";

class Timeline extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPosts();
    };

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