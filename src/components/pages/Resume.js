import React from 'react';
import Resumepdf from '../../project-images/Resume-2022.pdf';
import { Card, Col} from 'react-bootstrap'

export default function Resume() {
  return (
    <Card className="mt-5">
    <Col>
      <Col md="12">
        <embed id="Resume" src={Resumepdf} width="100%" height="950px%" />
      </Col>
    </Col>
  </Card>
);
};
