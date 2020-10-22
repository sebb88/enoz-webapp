  
import React from 'react'

const ProjectSummary = ({project}) => {
  return (
    <div className="card z-depth-0 project-summary post">
      <div className="card-content">
        <span className="card-title ">{project.titulo}</span>
          <p className="white-text">{project.contenido}</p>
          <p className="black-text"> NO </p>
      </div>
    </div>
  )
}

export default ProjectSummary