import React from "react";
import { Link } from "react-router-dom";
import cookies from "js-cookie";
function projectDiv({ project }) {
  const lang = cookies.get("i18next") || "en";
  console.log(project)
  return (
    <div>
      <img src={project.screenshots[0]} alt={project.screenshots[0]} />
      <Link to={`/Portfolio/${project.id}`}>
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
