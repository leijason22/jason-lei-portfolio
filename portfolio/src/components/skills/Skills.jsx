import React from 'react';
import "./skills.css";
import Image1 from "../../assets/jasonskills.png";
import Image2 from "../../assets/jasoncallme.png"
import Image3 from "../../assets/jasongasp.png"
import Image4 from "../../assets/jasonlogo2.png"
import Image5 from "../../assets/jasonprofpic.png"
import Image6 from "../../assets/jasonraisehand.png"
import Image7 from "../../assets/jasoncallme.png"
import Image8 from "../../assets/jasoncallme.png"
import Image9 from "../../assets/jasoncallme.png"
import Image10 from "../../assets/jasoncallme.png"
import Image11 from "../../assets/jasoncallme.png"



// const data = [
//   {
//     id: 1,
//     image: Image1,
//     title: "Java",
//     // description: 
//   },

const Skills = () => {
  return (
    <section className="skills container section" id='skills'>
    <h2 className="section_title">Skills</h2>

    <div className="skills_container grid">
    <img src={Image1} alt="" className="skills_img" />
      <div className="skills_data grid">
        <div className="skills_info">
          <p className="skills_description">Languages, frameworks, etc. that I have experience with.</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Skills