import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
export const Forgot = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    alert("Email Sent Sucessfully")
  
    emailjs.sendForm('service_i7hxzl9','template_llq7bwc', e.target, 'doRc32n8EnVEyuQxZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
  <div >
      <div><strong><h3>Forgot Password</h3></strong></div>
      <div className="mb-3">
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" className="form-control"/>
      <label>Email</label>
      <input type="email" name="user_email" className="form-control"/><br/><br/>
      <input className="btn" type="submit" value="Send" />
    </form>
    </div>
    </div>
  );
};