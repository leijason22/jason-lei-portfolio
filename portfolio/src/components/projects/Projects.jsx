import React from 'react';
import "./projects.css";
import Image1 from "../../assets/jasonprojects.png";

const Projects = () => {
  return (
    <section className="projects container section" id='projects'>
    <h2 className="section_title">Projects</h2>

    <div className="projects_container grid">
    <img src={Image1} alt="" className="projects_img" />
      <div className="projects_data grid">
        <div className="projects_info">
          <p className="projects_description">Take a look at what I've worked on/what I'm currently working on!</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Projects