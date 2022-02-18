import React from "react";
import { Apps } from "../../data";
import { Card, Button, Col } from "react-bootstrap";
import './Projects.css';


// import { CodeIcon } from "@heroicons/react/solid";
export default function Projects() {
  return (
    <div>
      <h1>My Projects</h1>
      <section id="projects">
        <div>
          <div>
            {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
            {/* <h1>Apps I've Built</h1> */}
            <p>
              A short list of my favorite applications that I've built during
              the past few months.
            </p>
          </div>

          {Apps.map((App) => (
            <Card style={{ width: "50rem", }} className='cardSpace'>
              <Col>
                {/* <Card.Img variant="side" src={App.image}/> */}
                <Card.Img
                  src={require(`../../project-images/${App.image}.png`)}
                  alt="its a description alright"
                />
              </Col>
              <Col>
                <Card.Body className=''>
                  <Card.Title >{App.title}</Card.Title>
                  <Card.Text>{App.subtitle}</Card.Text>
                  <Card.Text>{App.description}</Card.Text>
                  
                  <a href="App.link" target="_blank"> <Button variant="primary">{App.title}</Button></a>
                  
                  <a href="App.link2" target="_blank"><Button variant="primary">GitHub Repository</Button></a>

                </Card.Body>
              </Col>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
