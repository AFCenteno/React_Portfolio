import React from "react";
import img from './img/AC.jpg'

const AboutMe = () => (
    <div className='row'>
      <div className='myphoto'>
        <img className=' col-sm-12 col-lg-6' src={img}></img>
      </div>
      <p className='col-sm-12 col-lg-6 aboutcontent'>
        
      </p>
    </div> 
);

export default AboutMe;
