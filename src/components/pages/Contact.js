import React from "react";

const onSubmit = data => console.log(data);

const Contact = () => (
  <div className='contactInfo'>
    <form id='contact-form'>
      <input type='text' name='user_name' placeholder='Name' />
      <br/>
      <input type='email' name='user_email' placeholder='Email' />
      <br/>
      <textarea name='message' placeholder='Message'/>
      <br/>
      <input type='submit' value='Send' />
    </form>
  </div>
);

export default Contact;
