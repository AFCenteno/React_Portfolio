import { findByLabelText } from '@testing-library/dom';
import React from 'react';
import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'
import twitter from '../images/twitter.svg'

function Footer() {
    return(
    <footer className='container'>
        <div id='footerrow' className='row'>
            <div className='sociallink col-lg-1 col-md-2 col-sm-12'>
                <a href="https://github.com/mrafcent1" target="_blank">
                <img src={github} />
                </a>
            </div>
            <div className=' sociallink col-lg-1 col-md-2 col-sm-12'>
                <a href="https://www.linkedin.com/in/alexander-centeno-773148212/" target="_blank">
                <img src={linkedin} />
                </a>
            </div>
            <div className=' sociallink col-lg-1 col-md-2 col-sm-12'>
                <a href="https://twitter.com/Alex25059645" target="_blank">
                <img src={twitter} />
                </a>
            </div>
        </div>
    </footer>
    ) 
}



export default Footer;