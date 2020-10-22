import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../store/actions/authActions'
import { Redirect} from 'react-router-dom'

class LoginCl extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state)
  }
  render() {
    const { authError, auth } = this.props;

    if (auth.uid) return <Redirect to="/inicio" />

    return (
      <div className="container-fluid">
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <center>
              <img className="img-circle img-responsive" src="../pics/enox2.gif" alt="Enozidio"></img>
              <h3>Para disfrutar totalmente de la web, inicia sesión dándole click al botón</h3>
              <button className="btn btn-default" onSubmit={this.handleSubmit}>Clickeame para conspirar</button>
            </center>
            <div className="center red-text">
              { authError ? <p>{authError}</p> : null }
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    authError: state.auth.authError,
    auth: state.firebase.auth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (creds) => dispatch(login(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginCl)