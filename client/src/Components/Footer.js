import React from "react";
import { Container, Row, Col, CardImg } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import './footer.css';

function Footer() {
  return (
    <Container fluid>
      <div className="footer-container">
          <Row>
            <Col><FontAwesomeIcon icon={faTwitter} size="3x"/>@socal_kopites</Col>
            <Col><CardImg src="/images/club-crest-white-2.png" size="50%" alt="Official Supporters Club Crest" /></Col>
            <Col><FontAwesomeIcon icon={faInstagram} size="3x"/>@socal_kopites</Col>
          </Row>
        </div>
    </Container>
    
  );
}

export default Footer;