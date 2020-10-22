import React from 'react';
import SignInNav from '../auth/SignInNav';
import SignedOutNav from '../auth/SignedOutNav';
import { connect } from 'react-redux';

const Navbar = (props) => {
    const { auth } = props;
    const links = auth.uid ? <SignInNav  /> : <SignedOutNav />;

    return (
        <div className="navbar-fixed">
            <nav className="nav-wrapper purple darken-3 container-fluid">
                <div className="container-fluid">
                    <div className="">
                        <a className="brand-logo left" href="https://www.twitch.tv/enoz">Twitch.tv/enoz</a>

                    {auth.isLoaded &&
                        links
                    }
                    </div>
                </div>
            </nav>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)