import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
      <div className="container section project-details">
          <div className="card z-depth-0">
              <div className="card-content">
                  <span className="card-title">Project Title {id}</span>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque qui consequatur, at officia est tenetur necessitatibus corrupti nostrum delectus eveniet nemo vitae, rem magni expedita fugit quia itaque dolor cupiditate?</p>
              </div>
              <div className="card-action grey lighten-4 grey-text">
                  <div>Posted by Amit Gupta</div>
                  <div>2nd September, 2am</div>
              </div>
          </div>
      </div>
  )
}

export default ProjectDetails
