import React from 'react';
import "./home.css";
import Me from "../../assets/jasonavatar.png";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';


const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home_img" />
        <h1 className="home_name"> Jason Lei</h1>
        <span className="home_education"> Full Stack Web Developer</span>

        <HeaderSocials></HeaderSocials>

        {/* <a href="#contact" className="btn"> Hire Me</a> */}

        <ScrollDown></ScrollDown>

      </div>

    </section>
  )
}

export default Home