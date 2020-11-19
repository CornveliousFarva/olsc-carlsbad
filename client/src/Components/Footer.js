import React from "react";
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <Container>
      <div className="footer">
      <footer class="py-5 bg-dark fixed-bottom">
        <div class="container">
          <Row>
            <Col><FontAwesomeIcon icon={faTwitter} /></Col>
            <Col><FontAwesomeIcon icon={faInstagram} /></Col>
            <Col>.col</Col>
            <Col>.col</Col>
          </Row>
        </div>
      </footer>
    </div>
    </Container>
    
  );
}

export default Footer;