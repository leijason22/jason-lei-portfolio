import React from 'react';
import "./projects.css";
import Image1 from "../../assets/jasonprojects.png";
import Image2 from "../../assets/jasonprojects.png";
import Image3 from "../../assets/jasonprojects.png";
import Image4 from "../../assets/jasonprojects.png";

 


const Projects = () => {
  return (
  //   <section className="projects container section" id='projects'>
  //   <h2 className="section_title">Projects</h2>

  //   <div className="projects_container grid">
  //   <img src={Image1} alt="" className="projects_img" />
  //     <div className="projects_data grid">
  //       <div className="projects_info">
  //         <p className="projects_description">Take a look at some of the projects I've worked on/projects I'm currently working on!</p>
  //       </div>
  //     </div>
  //   </div>

    
  // </section>

<section className="projects container section" id='projects'>
      <h2 className="section_title">Projects</h2>

      <div className="projects_container grid">
        <img src={Image1} alt="" className="projects_img" />
        <div className="projects_data grid">
          <div className="projects_info">
            <p className="projects_description">Take a look at some of the projects I've worked on/projects I'm currently working on!</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="projects-list grid">
          <div className="project-item">
          <img src={Image1} alt="" className="projects_img" />
            <h2>Sillybus</h2>
            <p>
              Aosidjsalkdjaskldjklasdklsajdklaskldjkasdj
            </p>
            <a href="#">Learn more</a>
          </div>
          <div className="project-item">
          <img src={Image1} alt="" className="projects_img" />
            <h2>Personal Portfolio</h2>
            <p>
              Aosidjsalkdjaskldjklasdklsajdklaskldjkasdj
            </p>
            <a href="#">Learn more</a>
          </div>
          <div className="project-item">
          <img src={Image1} alt="" className="projects_img" />
            <h2>TBD Project</h2>
            <p>
              Aosidjsalkdjaskldjklasdklsajdklaskldjkasdj
            </p>
            <a href="#">Learn more</a>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Projects