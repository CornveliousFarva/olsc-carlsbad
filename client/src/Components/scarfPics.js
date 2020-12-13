import React  from 'react';
import {
  Container, Row, Col 
} from 'reactstrap';
import Footer from './footer'
import "./scarfPics.css"


const ScarfPics = (props) => {
  return (
    <Container>
      <Row>
        <Col><h1>Our Scarf</h1></Col>
      </Row>
      <Row>
      </Row>
      <img src="/images/scarfPics/scarf-design.png" className="carlsbadScarf" alt="scarf design pic" />
      <p>This is our scarf, respresenting the city of Carlsbad with the arches that feature the city's name, as well as Liverpool's 6 European Cups. From the beaches of California, to the cornfields of Iowa, and the Fields of Anfield Road, it has been many places.</p>
      <h2>More Pictures</h2>
      <Row>
        <Col>
          <img src="/images/scarfPics/scarf-8.jpg" className="iowa" alt="pic from Iowa"/>
        </Col>
        <Col>
        <img src="/images/scarfPics/scarf-1.jpg" className="scarf1" alt="scarf pic no. 1"/>
        </Col>
        <Col>
        <img src="/images/scarfPics/scarf-2.jpg" className="scarf2" alt="scarf pic no. 2"/>
        </Col>
      </Row>
      <Row>
        <Col><img src="/images/scarfPics/scarf-3.jpeg" className="scarf3" alt="scarf pic no. 3"/></Col>
        <Col>
        <img src="/images/scarfPics/scarf-4.jpg" className="scarf4" alt="scarf pic no. 4"/>
        </Col>
        <Col>
        <img src="/images/scarfPics/scarf-5.jpg" className="scarf5" alt="scarf pic no. 5"/>
        </Col>
      </Row>
      <Row>
        <Col>
        <img src="/images/scarfPics/scarf-6.jpeg" className="scarf6" alt="scarf pic no. 6"/>
        </Col>
        <Col>
        <img src="/images/scarfPics/scarf-7.jpg" className="scarf7" alt="scarf pic no. 7"/>
        </Col>
        <Col>
        </Col>
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