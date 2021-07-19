import React from "react";
import img from './img/AC.jpg'
import badge from './img/bootcamp.png'


const AboutMe = () => (
    <div className='row'>
      <div className='myphoto'>
        <img className=' col-sm-12 col-lg-12' src={img}></img>
      </div>
      <p className='col-sm-12 col-lg-12 aboutcontent'>
        I'm Alex, a full-stack web developer residing in sunny Florida. Check out my work and feel free to contact me about anything coding related. 
      </p>
      <a className='badgelink col-2' href="https://badgr.com/public/assertions/cs_u8yAzTbKc02YeVYln_A" target="_blank"><img id="badge" src={badge}></img></a>
    </div>
     
);

export default AboutMe;
