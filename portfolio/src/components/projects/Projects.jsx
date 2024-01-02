import React from 'react';
import "./projects.css";
import Image1 from "../../assets/jasonprojects.png";
import Image2 from "../../assets/jasonprojects.png";
import Image3 from "../../assets/jasonprojects.png";
import Image4 from "../../assets/jasonprojects.png";

const data = [
{
  id: 1,
  image: Image1,
  title: "Sillybus",
  description: 
    "Blah blah blah."
},
{
  id: 2,
  image: Image1,
  title: "Personal Portfolio",
  description: 
    "Blah blah blah."
},
{
  id: 3,
  image: Image1,
  title: "RU Pizzeria",
  description: 
    "Blah blah blah."
},
];
 

const Projects = () => {

  //add link to project/github on-click
  return(
    <section className="projects container section" id = "projects">
      <h2 className="section_title">Projects</h2>

      <div className="projects_container grid">
        {data.map(({id, image, title, description}) => {
          return (
            <div className="projects_card" key={id}>
              <img src={image} alt="" className="projects_img" />
              <h3 className="projects_title">{title}</h3>
              <p className="projects_description">{description}</p>
            </div>
          );
        })}

      </div>

    </section>
  );
};

export default Projects