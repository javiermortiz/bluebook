import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Bluebar from './bluebar';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Bluebar);