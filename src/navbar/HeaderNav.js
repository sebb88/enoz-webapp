import React from 'react';
import { connect } from 'react-redux';

const HeaderNav = (props) => {
    const { auth } = props;

    var photoProf = auth.photoURL;

    if (!photoProf) {
        photoProf= '/pics/logo.jpg'
    }

    return (
        <div id="header" className="header container-fluid" >
            <div className="row">
                <div className="col-lg-1 titular">
                    <a className="filtro" href="https://www.twitch.tv/enoz">
                        Twitch.tv/enoz
                    </a>
                </div>
                <div className="col-lg-1 pull-right usuario">
                    <figure className="avatar">
                        <img src={photoProf} alt="User:" />
                    </figure>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(HeaderNav)

