import React from "react";
import { Apps } from "../../data";
import { Card, Button, Col} from 'react-bootstrap'

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
           A short list of my favorite applications that I've built during the past few months.
            </p>
          </div>
          
          {Apps.map((App) => (
          <Card style={{ width: '18rem' }}> 
<Col>
  <Card.Body>
    <Card.Title>{App.title}</Card.Title>
    <Card.Text>
      {App.subtitle}
    </Card.Text>
    <Card.Text>
      {App.description}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Col>
<Col>
{/* <Card.Img variant="side" src={App.image}/> */}
<Card.Img src={require(`../../project-images/${App.image}.PNG}`)} />
</Col>
</Card>

          )
          )}
        </div>
      </section>
    </div>
 
)}
