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
          <Row>
            <Col>
              <FontAwesomeIcon icon={faTwitter} size="3x"/>@socal_kopites</Col>
            <Col>
              <FontAwesomeIcon icon={faInstagram} size="3x"/>@socal_kopites</Col>
          </Row>
    </Container>
    
  );
}

export default Footer;