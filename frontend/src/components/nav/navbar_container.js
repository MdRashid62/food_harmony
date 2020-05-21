import { connect } from 'react-redux';
import NavBar from './navbar';
import { openModal } from "../../actions/modal_actions";
import {logout} from "../../actions/session_actions"
import {withRouter} from "react-router-dom"

const mapStateToProps = state => ({
	// Grabbing current user from session slice of state to greet dynamically if logged in
	isAuthenticated: state.session.isAuthenticated,
    currentUser: state.session.user
});

const mapDispatchToProps = dispatch => ({
	openModal: modal => dispatch(openModal(modal)),
	logout: () => dispatch(logout())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
