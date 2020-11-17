import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';

const Landing = (props) => {
  return (
    <div class="homepage-div">
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Official Liverpool FC Supporters Club- Carlsbad, California</h1><br></br>
          <h2> Community | Unity | Passion</h2><br></br>
          <h3>Representing Liverpool FC supporters in Northern San Diego</h3>
         <Row>
        <Col><i class="fa fa-instagram" aria-hidden="true">Instagram:</i></Col>
        <Col><i class="fa fa-facebook" aria-hidden="true">Facebok:</i></Col>
        <Col><i class="fa fa-twitter" aria-hidden="true">Twitter:</i></Col>
        <Col>Email:</Col>
        <Col></Col>
        <Col></Col>
      </Row> 
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Landing;

