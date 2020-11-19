import React from "react";
import { Container, Row, Col } from 'reactstrap';
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
            <Col><FontAwesomeIcon icon={faInstagram} size="3x"/>@socal_kopites</Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </div>
    </Container>
    
  );
}

export default Footer;