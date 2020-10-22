import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject, updateProject } from '../store/actions/projectActions';
import { Redirect } from 'react-router';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class CreateProject extends Component {

  state = {
    clipRef1: '',
    clipRef2: '',
    clipRef3: '',
    creadoFch: new Date(),
    contenido: '',
    linkRef: '',
    picLink: '',
    picRef: '',
    titulo: '',
    uid: this.props.auth.uid
  }

  handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProject(this.state);
    this.props.history.push('/')
  }
  handleUpdate = (e) => {
    e.preventDefault();
    //console.log(this.state);
    this.props.updateProject(this.state);
    this.props.history.push('/')
  }
  render() {
    const { auth, projects } = this.props;

    console.log(this)
    if (!auth.uid) return <Redirect to="login" />

    return (
      <div className="container">
        { projects && projects.map(project => {
            return (
                <div key={project.id} >
                  <form className="" onSubmit={this.handleSubmit}>
                    <h5 className="yellow-text">Crear nuevo evento</h5>
                    <div className="input-field">
                      <input type="text" id='titulo' onChange={this.handleChange} defaultValue={project.titulo}/>
                      <label htmlFor="titulo"> {this.state.titulo} </label>
                    </div>
                    <div className="input-field">
                      <textarea id="contenido" className="materialize-textarea" onChange={this.handleChange} defaultValue={project.contenido}></textarea>
                      <label htmlFor="contenido">Contenido</label>
                    </div>
                    <div className="input-field">
                      <textarea id="clipRef1" className="materialize-textarea" onChange={this.handleChange} defaultValue={project.clipRef1}></textarea>
                      <label htmlFor="clipRef1">Clip 1</label>
                    </div>
                    <div className="input-field">
                      <textarea id="clipRef2" className="materialize-textarea" onChange={this.handleChange} defaultValue={project.clipRef2}></textarea>
                      <label htmlFor="clipRef2">Clip 2</label>
                    </div>
                    <div className="input-field">
                      <textarea id="clipRef3" className="materialize-textarea" onChange={this.handleChange} defaultValue={project.clipRef3}></textarea>
                      <label htmlFor="clipRef3">Clip 2</label>
                    </div>
                    <div className="input-field">
                      <button className="btn yellow black-text">Crear</button>
                    </div>
                  </form>
                </div>
            )
          })
      }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    projects: state.firestore.ordered.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project)),
    updateProject: (project) => dispatch(updateProject(project))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => [
    {
      collection: 'posts',
      doc: props.auth.uid
    }
  ])
) (CreateProject)