import React from 'react';
import Bluebar from '../logged_in/bluebar';
import PostFormContainer from '../profile/post_form_container';
import PostsContainer from '../profile/posts_container';

class Newsfeed extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount () {
        this.props.fetchNewsfeedPosts();
    }

    render() {
        return (
            <div>
                <Bluebar currentUser={this.props.currentUser} logout={this.props.logout} />
                <div className="newsfeed">
                    <div className="left-sidebar">
                        <section className="developer">
                            <img src={window.developer} alt="Jaiver Ortiz profile pic" />
                            <h3> Javier M Ortiz</h3>
                        </section>
                        <ul className="left-sidebar-list">
                            <a href="https://github.com/javiermortiz" target="_blank"><li><i class="fab fa-github-square"></i><span>Github</span></li></a>
                            <a href="https://www.linkedin.com/in/javiermortiz/" target="_blank"><li><i class="fab fa-linkedin"></i><span>LinkedIn</span></li></a>
                            <a href="https://angel.co/u/javiermortiz" target="_blank"><li><i class="fab fa-angellist"></i><span>AngelList</span></li></a>
                        </ul>
                    </div>
                    <div className="timeline">
                        <PostFormContainer currentUser={this.props.currentUser} />
                        <div className="posts-title">Posts</div>
                        <PostsContainer currentUser={this.props.currentUser} posts={this.props.posts}/>
                    </div>
                    <div className="right-sidebar">
                        <h3>Other Projects</h3>
                        <ul className="right-sidebar-list">
                            <a href="http://quarrel-pro.herokuapp.com/#/" target="_blank">
                                <li>
                                    <h3>Quarrel</h3>
                                    <img src={window.quarrel} alt="quarrel screenshot" />
                                </li>
                            </a>
                            <a href="https://javiermortiz.github.io/breakout/" target="_blank">
                                <li>
                                    <h3>Breakout</h3>
                                    <img src={window.breakout} alt="breakout screenshot" />
                                </li>
                            </a>
                            <a href="https://officeslackers.herokuapp.com/#/" target="_blank">
                                <li>
                                    <h3>Slackers</h3>
                                    <img src={window.slackers} alt="slackers screenshot" />
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsfeed;