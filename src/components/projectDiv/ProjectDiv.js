import React from "react";
import { Link } from "react-router-dom";
import cookies from "js-cookie";
function projectDiv({ project }) {
  const lang = cookies.get("i18next") || "en";
  console.log(project)
  return (
    <div>
      <Link to={`/Portfolio/${project.id}`}>
      <img src={project.screenshots[0]} alt={project.screenshots[0]} />
      
        <p>
          <span>{project.title}</span>
          <br />
          {lang === "en"? project.about:project.aboutFR}
        </p>
      </Link>
    </div>
  );
}

export default projectDiv;
