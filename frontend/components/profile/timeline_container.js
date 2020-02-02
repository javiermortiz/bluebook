import { connect } from "react-redux";
import Timeline from "./timeline";

const mapStateToProps = state => ({
    posts: state.entities.posts
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);