import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {<span>Rails</span>}
        {<span>Bootstrap CSS</span>}
        {<span>React</span>}
        {<span>Redux</span>}
      </div>
    </div>
  );
}

export default ProjectItem;
