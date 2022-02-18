import React from "react";
import Apps from "../../data";
import { Card, Button, Col } from "react-bootstrap";
import './Projects.css';


// import { CodeIcon } from "@heroicons/react/solid";
export default function Projects() {
  return (
    <div>
      <h1 className='title'>- My Projects -</h1>
      <section id="projects">
        <div>
          <div>
            {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
            {/* <h1>Apps I've Built</h1> */}
            {/* <p className='title'>
              A short list of my favorite applications that I've built during
              the past few months.
            </p> */}
          </div>
    <main className="container ">
      <div className ='row gridWidth'>
          {Apps.map((App) => (
            <Card  className='col-sm-6 mt-3 cardSpace'>
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
                  <div className='row justify-content-center'>
                  <Card.Link href={App.link} target='_blank' className="btn btn-primary col m-3">Github</Card.Link>
                  <Card.Link href={App.link2} target='_blank' className="btn btn-primary col m-3">Deployed</Card.Link>
                  </div>
                </Card.Body>
              </Col>
            </Card>
          ))}
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}
