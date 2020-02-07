import React from "react";

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
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

    handleDelete (for_user_id, postId) {
        return e => {
            e.preventDefault();
            const postInfo = {
                for_user_id: for_user_id,
                postId: postId
            };
            this.props.deletePost(postInfo);
        }
    }

    render() {
        if (this.props.posts === undefined) {
            return null;
        }
        return (
            <div className="posts">
                <ul className="posts-list">
                    {Object.values(this.props.posts).map(post => (
                        <li>
                            {console.log(post)}
                            {post.created_at}
                            <div className="post-body">
                                {post.body}
                            </div>
                            
                            {
                                this.props.currentUser.id === post.author_id &&
                                <button 
                                    onClick={this.handleDelete(post.for_user_id, post.id)}
                                    className="post-delete-button">
                                    Delete
                                </button>
                            }
                        </li>
                        ))}
                </ul>
            </div>
        )
    }
}

export default Posts;