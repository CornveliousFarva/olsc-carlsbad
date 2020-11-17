import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';

const Landing = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Official Liverpool FC Supporters Club- Carlsbad, California</h1>
          <p className="lead"> Community | Unity | Passion</p>
          <p>Representing Liverpool FC supporters in Northern San Diego</p>
        </Container>
      </Jumbotron>
      <Container>
      <Row>
        <Col><i class="fa fa-instagram" aria-hidden="true">Instagram:</i></Col>
        <Col><i class="fa fa-facebook" aria-hidden="true">Facebok:</i></Col>
        <Col><i class="fa fa-twitter" aria-hidden="true">Twitter:</i></Col>
        <Col>Email:</Col>
        <Col></Col>
        <Col></Col>
      </Row>
      </Container>
    </div>
  );
};

export default Landing;

