import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Footer from './footer';
import './about.css'


const About = (props) => {
  return(
    <Container fluid>
      <Row>
        <Col>
        <h1>About Us</h1>
          <p>Established in 2016, the Official Liverpool FC Supporters Club-Carlsbad, California, serves the communities of northern San Diego County: Carlsbad, Oceanside, Vista, San Marcos, Escondido, Fallbrook, Encinitas, and Solana Beach. Our usual meeting place for match days-current restrictions pending is Senor Grubby's, located in the heart of downtown Carlsbad. While we represent northern San Diego, we are also glad to welcome and any all visiting Liverpool supporters from around the world to stop on by for a match if they're in the area.</p>
        </Col>
      </Row>
        <h2>Directions to Grubby's</h2>
      <Row>
        
        <Col xs="6" sm="4">
          <h3>From the North: Oceanside, Orange County, and Los Angeles</h3>
            <p>Take Interstate 5 South to Carlsbad Village Drive. Make a right on Carlsbad Village Drive. Follow Carlsbad Village Drive until you see the train tracks. Grubby's is just past the train tracks and is on the left hand side.</p>
        </Col>
        <Col xs="6" sm="4">
        <h3>From the South: Encinitas, Solana Beach, Cardiff, and San Diego</h3>
          <p>Take Interstate 5 North to Carlsbad Village Drive. Make a left on Carlsbad Village Drive. Follow Carlsbad Village Drive until you see the train tracks. Grubby's is just past the train tracks and is on the left hand side.</p>
        </Col>
        <Col sm="4">
        <h3>From the East: Vista, San Marcos, and Escondido</h3>
          <p>Due to congestion at the interchange between State Route 78 and I-5 South, thie is a more advisable route. Take State Route 78 West and get off on El Camino Real and make a left. Make a right onto Carlsbad Village Drive and follow it until you see the train tracks. Grubby's is just past the train tracks and is on the left hand side.</p>
        </Col>
      </Row>
      <Row>
        <Col>
        <h2>Parking</h2>
          <p>There are several parking lots within walking distance, including one across the street. Parking at Grubby's is EXTREMELY limited.</p>
        </Col>
      </Row>
      <div className="footer-container">
        <Footer />
      </div>
      
    </Container>
    
  )
}

export default About;

