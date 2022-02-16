import React from 'react';
import './About.css'
import { ListGroup } from "react-bootstrap"

export default function About() {
  return (
    <div>
      <h1 className='abouth1'>About Me</h1>
      <p className='about'>
      I graduated from Northern Arizona University in 2020 with a degree in Business Management and Marketing. After graduation, I pursued a career in sales, more specifically, I worked for a recruiting company. After working in sales for a short period of time, it was evident to me that I was not going to be happy doing sales long-term. My next role was as the Marketing Manager for a car shop in town. It was after doing this for several months that I found programming and have been glued to my computer ever since. I am a driven individual with a passion for learning new things and am very excited for the next step in my career as a Full-Stack Web Developer
      </p>
      <br></br>
      <h1 className='abouth1'>Skills</h1>
      <ListGroup>
  <ListGroup.Item classname="about">HTML5</ListGroup.Item>
  <ListGroup.Item>CSS</ListGroup.Item>
  <ListGroup.Item>JavaScript</ListGroup.Item>
  <ListGroup.Item>React</ListGroup.Item>
  <ListGroup.Item>Node</ListGroup.Item>
</ListGroup>
    </div>
  );
}
