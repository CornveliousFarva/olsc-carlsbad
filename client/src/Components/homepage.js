import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Footer from './footer';
import './homepage.css'

const Landing = (props) => {
  return (
    <div class="homepage-div">
        <Container fluid>
          <Row>
            <Col>
              <img className="clubCrestWhite" src="/images/club-crest-white-2.jpg" alt="Club-Crest-White"/>
            </Col>
            </Row>
          <Row>
          <Col>
              <h2> Community | Unity | Passion</h2>
            </Col>
            <Col>
              <h3>Representing Liverpool FC supporters in Northern San Diego</h3>
            </Col>
          </Row>
        </Container>
      <Footer />
    </div>
  );
};

export default Landing;