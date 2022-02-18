import React from 'react';
import { Card, Button, Col } from "react-bootstrap";
import myPic from '../../project-images/myPic.jpg';
import './Contact.css'


export default function Contact() {
  return (
    <div className='lovelyBorder'>
      
      {/* <h1 className='divCenter' >- Contact Me -</h1>

      <div className='divCenter'>
      <img src={myPic} className ='picSize' />
      </div>

      

      <div className='divCenter'>
      <h3>Email Address</h3>
      <p>bennetwilson@gmail.com</p>
      <br />
      <h3>Phone Number</h3>
      <p>602-696-8059</p>
      </div> */}

      <div class="container">
  <h1 className='divCenter'>- Contact Me -</h1>
  <form target="_blank" action="https://formsubmit.co/bennetwilson@gmail.com" method="POST">
    <div class="form-group">
      <div class="form-row">
        <div class="col">
          <input type="text" name="name" class="form-control" placeholder="Enter Your Name" required />
        </div>
        <div class="col">
          <input type="email" name="email" class="form-control" placeholder="Enter Your Email Address" required />
        </div>
      </div>
    </div>
    <div class="form-group">
      <textarea placeholder="Enter Your Message" class="form-control" name="message" rows="10" required></textarea>
    </div>
    <button type="submit" class="btn btn-lg btn-dark btn-block">Submit Form</button>
  </form>
</div>

    </div>
  );
}
