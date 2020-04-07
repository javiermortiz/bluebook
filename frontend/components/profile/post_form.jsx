import React from 'react';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { body: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const post = {
            body: this.state.body,
            author_id: this.props.currentUser.id,
            for_user_id: this.props.currentProfile
        };
        this.props.createPost(post);
        this.setState({ body: '' })
    }

    update() {
        return e => {
            this.setState({ body: e.currentTarget.value });
        }
    }

    render () {
        const { currentUser } = this.props;
        let profileUrl = window.profileURL;
        if (currentUser.profileUrl) {
            profileUrl = currentUser.profileUrl
        }
        if (this.props.friendsWith.includes(this.props.currentProfile) || 
            this.props.currentUser.id === this.props.currentProfile) {
            return (
                <div className="post-form-container">
                    <div className="post-form-header">Create Post</div>
                    <form className="post-form" onSubmit={this.handleSubmit}>
                        <div className="post-form-input-container">
                            <img className="post-thumbnail" src={profileUrl} />
                            <input
                                type="text"
                                className={`post-form-input`}
                                placeholder="What's on your mind?"
                                onChange={this.update()}
                                value={this.state.body}
                            />
                        </div>
                    
                        <div className="post-form-footer">
                            <button
                                disabled={this.state.body.length === 0}
                                id={this.state.body.length === 0 ? "disabled" : ""}
                            >
                                Post
                            </button>
                        </div>
                        
                    </form>
                </div>
            )
        } else {
            return null;
        }
        
    }
}

export default PostForm;