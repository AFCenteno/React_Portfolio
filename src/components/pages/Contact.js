import React from "react";
import emailjs from 'emailjs-com'

export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_2e8a3qb', 'template_x5j9je1', '#form', 'user_kiDPxqFWUFpc3Q7kEcP6d')
      .then((result) => {
          console.log(result.text);
          window.alert("Message has been sent!")
      }, (error) => {
          console.log(error.text);
          window.alert("Message has not been sent!")
      });
  }

  return (
    <div>
    <h1 className='col-12 pagetitle'>Contact Me</h1>
    <form id='form' className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="to_name" value="Alex" />
      <input type="text" name="from_name" placeholder="Enter Name" />
      <input type="email" name="user_email" placeholder="Enter Email" />
      <textarea name="message" placeholder="Enter Message" />
      <input id="send" type="submit" value="Send" />
    </form>
    </div>  
  );
}
