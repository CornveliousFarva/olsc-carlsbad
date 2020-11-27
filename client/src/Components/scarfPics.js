import React  from 'react';
import {
  Container, Row, Col 
} from 'reactstrap';
import Footer from './footer'


const ScarfPics = (props) => {
  return (
    <Container>
      <Row>
        <Col><h1>Our Scarf</h1></Col>
      </Row>
      <Row>
      </Row>
      <img src="/images/scarfPics/scarf-design.png" alt="scarf design pic" />
      <p>This is our scarf, respresenting the city of Carlsbad with the arches that feature the city's name, as well as Liverpool's 6 European Cups. From the beaches of California, to the cornfields of Iowa, and the Fields of Anfield Road, it has been many places.</p>
      <h2>More Pictures</h2>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
      </Row>
      <Footer />
    </Container>
  )
}

export default ScarfPics;