import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router';

const ProjectDetails = (props) => {

    const { project, auth } = props;

    if (!auth.uid) return <Redirect to="/login" />

    if (project) {
        var clip1, clip2, clip3;
        clip1 = project.clipRef1 + "&parent=enoz-78d3e.web.app&autoplay=false";
        clip2 = project.clipRef2 + "&parent=enoz-78d3e.web.app&autoplay=false";
        clip3 = project.clipRef3 + "&parent=enoz-78d3e.web.app&autoplay=false";

        return (
          <div className="container-fluid">
            <div className="">
              <div className="row">
                <div className="row">
                  <span className="col-lg-12">{project.titulo}</span>
                </div>
                <div className="row">
                  <p className="col-lg-12 white-text">{project.contenido}</p>
                </div>
                <div className="row">
                  <iframe title="Clip 1"
                    className="col-lg-4"
                    src= {clip1}
                    parent="www.enoz-78d3e.web.app/project/" 
                    height="300px" 
                    width="480px"
                    frameBorder="1" 
                    scrolling="no"
                    allowFullScreen={true} />

                  <iframe title="Clip 2"
                    className="col-lg-4"
                    src= {clip2}
                    parent="www.enoz-78d3e.web.app/project/" 
                    height="300px" 
                    width="480px"
                    frameBorder="1" 
                    scrolling="no"
                    allowFullScreen={true} />

                  <iframe title="Clip 3"
                    className="col-lg-4"
                    src= {clip3}
                    parent="www.enoz-78d3e.web.app/project" 
                    height="300px" 
                    width="480px"
                    frameBorder="1" 
                    scrolling="no"
                    allowFullScreen={true} />
                </div>

                <div className="row">
                  <div className="col-lg-4">
                    <p className="white-text">{project.clipRef1}</p>
                  </div>
                  <div className="col-lg-4">
                    <p className="white-text">{project.clipRef2}</p>
                  </div>
                  <div className="col-lg-4">
                    <p className="white-text">{project.clipRef3}</p>
                  </div>
                </div>
              </div>
              <div className="grey lighten-4 grey-text">
                <div>Posted by {project.user}</div>
                <div>2nd September, 2am</div>
              </div>
            </div>
          </div>
        )
    } else {
        return (
          <div className="container text-center">
            <p>Loading...</p>
          </div>
        )
    }
}

const mapStateToPros = (state, ownProps) => {
    
    const id = ownProps.match.params.uid;
    const projects = state.firestore.data.posts;
    const project = projects ? projects[id] : null;
    return {
        project: project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToPros),
    firestoreConnect([
        { collection: 'posts' }
    ])
)(ProjectDetails)