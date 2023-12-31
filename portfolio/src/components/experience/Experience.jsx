import React from 'react';
import "./experience.css";
import Image3 from "../../assets/jasonexperience.png";

const Experience = () => {
  return (
  //   <section className="experience container section" id='experience'>
  //   <h2 className="section_title">Experience</h2>

  //   <div className="experience_container grid">
  //   <img src={Image3} alt="" className="experience_img" />
  //     <div className="experience_data grid">
  //       <div className="experience_info">
  //         <p className="experience_description">Some of my work experience!</p>
  //       </div>
  //     </div>
  //   </div>
  // </section>

  <section className="experience container section" id='experience'>
  <h2 className="section_title">Experience</h2>

  <div className="experience_container grid">
    <img src={Image3} alt="" className="experience_img" />

    <div className="experience_data grid">
      <div className="experience_info">
        <p className="experience_description">Some of my work experience!</p>
      </div>
    </div>
  </div>

  {/* New grid for multiple experience items  */}
  <div className="experience_details grid">
    {/* Experience item 1 */}
    <div className="experience_item">
      <h3>Job Title 1</h3>
      <p>Company Name 1</p>
      <p>Location 1</p>
      <p>Duration 1</p>
      <p>Description of responsibilities and achievements for Job 1.</p>
    </div>

    {/* Experience item 2 */}
    <div className="experience_item">
      <h3>Job Title 2</h3>
      <p>Company Name 2</p>
      <p>Location 2</p>
      <p>Duration 2</p>
      <p>Description of responsibilities and achievements for Job 2.</p>
    </div>

     {/* Experience item 3 */}
     <div className="experience_item">
      <h3>Job Title 3</h3>
      <p>Company Name 3</p>
      <p>Location 3</p>
      <p>Duration 3</p>
      <p>Description of responsibilities and achievements for Job 3.</p>
    </div>

  </div>
</section>


  )
}

export default Experience