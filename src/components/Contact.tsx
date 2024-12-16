import React from "react";
import { RiMailSendLine } from "react-icons/ri";
import { BsTelephoneInbound } from "react-icons/bs";
import "../app/styles/contact.css"


const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className='grid md:grid-cols-2 gap-10'>
        {/* Left Side - Contact Information */}
        <div className= "contact-space">
          <h2 className="contact-heading"  data-aos="zoom-in-up">
            Get in touch
            </h2>
          <p className="contact-text"  data-aos="zoom-in-up">
            Drop me a line, give me a call, or send me a message by submitting the form.
          </p>

          {/* Email Address */}
          <div className="contact-flex"  data-aos="zoom-in-up">
            <RiMailSendLine size={30} /> ammarmalikccg@gmail.com
          </div>

          {/* Phone Number */}
          <div className="contact-flex" data-aos="zoom-in-up">
            <BsTelephoneInbound size={30} /> 03181271484
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-space" >
          <div className="form"  data-aos="zoom-in-up">
            <label htmlFor="name">Name</label>
            <input type="text" className="input-field" id="name"/>
          </div>

          <div className="form"  data-aos="zoom-in-up">
            <label htmlFor="email">Email</label>
            <input type="text" className="input-field" id="email"/>
          </div>

          <div className="form"  data-aos="zoom-in-up">
            <label htmlFor="msg">Message</label>
            <textarea className="textarea-field" id="msg" rows={8}></textarea>
          </div>

            {/* Submit Button */}
            <button className="button" data-aos="zoom-in-up">
              Send Message
            </button>
            </div>
        </div>
      </div>
    
  );
};

export default Contact;