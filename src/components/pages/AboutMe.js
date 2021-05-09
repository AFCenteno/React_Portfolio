import React from "react";
import img from './img/AC.jpg'

const AboutMe = () => (
    <div>
      <h1>About Me</h1>
      <img className='myphoto' src={img}></img>
      <p className='aboutcontent'>
        Hello! My name is Alex Centeno, this is my portfolio. Feel free to browse my work!
      </p>
    </div> 
);

export default AboutMe;
