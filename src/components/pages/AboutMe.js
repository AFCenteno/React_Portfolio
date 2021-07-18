import React from "react";
import img from './img/AC.jpg'

const AboutMe = () => (
    <div className='row'>
      <div className='myphoto'>
        <img className=' col-sm-12 col-lg-12' src={img}></img>
      </div>
      <p className='col-sm-12 col-lg-12 aboutcontent'>
        I'm Alex, a Full-stack web developer residing in sunny Florida. Check out my work and feel free to contact me about anything coding. 
      </p>
    </div> 
);

export default AboutMe;
