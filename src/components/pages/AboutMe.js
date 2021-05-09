import React from "react";
import img from './img/AC.jpg'

const AboutMe = () => (
    <div className='row'>
      <h1 className='col-12 pagetitle'>About Me</h1>
      <img className='myphoto col-sm-12 col-lg-6' src={img}></img>
      <p className='col-sm-12 col-lg-6 aboutcontent'>
        Hey everyone, my name is Alex Centeno, welcome to my portfolio! I am currently residing in 
        Florida, working to become a full-time web developer. Feel free to browse my work and contact 
        me using the contact page available.
      </p>
    </div> 
);

export default AboutMe;
