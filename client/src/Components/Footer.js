import React from "react";
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import './footer.css';

const Footer = (props) => {
  <Container fluid>
    <Row>
        <Col><FontAwesomeIcon icon={faTwitter} size="2x"/></Col>
        <Col><FontAwesomeIcon icon={faInstagram} size="2x"/>.col</Col>
        <Col>.col</Col>
        <Col>.col</Col>
      </Row>
  </Container>
}


export default Footer;