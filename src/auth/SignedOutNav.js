import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutNav = () => {

    return (
        <div className="nav-wrapper">
            <ul className="right">
                <li><NavLink className="large material-icons barraLinks" to="/contacto">share</NavLink></li>
                <li><NavLink className="large material-icons barraLinks" to="/login">power_settings_new</NavLink></li>
            </ul>
        </div>
    )
}

export default SignedOutNav