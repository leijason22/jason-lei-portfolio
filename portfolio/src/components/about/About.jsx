import React from 'react';
import "./about.css";
import Image from "../../assets/jasonwhisper.png";
import Image2 from "../../assets/jasonraisehand.png";

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section_title">About Me</h2>

      <div className="about_container grid">
        <img src={Image2} alt="" className="about_img" />

        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">Hi! My name is Jason Lei. I'm currently pursuing a Bachelor of Sciences in Computer Science. 
            I am greatly interested and passionate about full stack web development and am looking for internship and co-op roles. 
            Looking forward to connect! </p>
            <a href="" className="btn">Download Resume</a>
          </div>
        </div>
      </div>

      <div className="about_container2 grid">
        <img src={Image} alt="" className="about_img" />

        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">"Insert Text Here"</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About