import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../store/actions/authActions';
import { Button } from '@material-ui/core';

const SignInNav = (props) => {
    const { auth } = props;
    return (
        <div className="nav-wrapper">
            <ul className="right">
                <li className="col-xs-1 col-xs-offset-4"><NavLink className="large material-icons barraLinks" to="/inicio" alt="Inicio">home</NavLink></li>
                <li className="col-xs-1"><NavLink className="large material-icons barraLinks" to="/contacto">share</NavLink></li>
                <li className="col-xs-1"><NavLink to='/panel' className="large material-icons barraLinks">view_agenda</NavLink></li>
                <li className="col-xs-1"><NavLink to='/crear' className="large material-icons barraLinks">mode_edit</NavLink></li>
                <li className="col-xs-1"><a href="/" onClick={props.signOut} className="large material-icons barraLinks">power_settings_new</a></li>
                <li className="col-xs-1"><Button to='/'>
                        <img src={auth.photoURL} alt={auth.displayName}></img>
                    </Button>
                </li>
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInNav)