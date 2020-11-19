import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import Footer from './footer';

const Landing = (props) => {
  return (
    <div class="homepage-div">
      <Jumbotron fluid>
        <Container fluid>
          <Row>
            <Col>
              <h1 className="display-3">Official Liverpool FC Supporters Club- Carlsbad, California</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2> Community | Unity | Passion</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Representing Liverpool FC supporters in Northern San Diego</h3>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Footer />
    </div>
  );
};

export default Landing;