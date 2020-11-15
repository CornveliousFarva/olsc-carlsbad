import React from "react";
import { Container, Row, Col } from 'reactstrap';

function Footer() {
  return (
    <Container>
      <div className="footer">
      <footer class="py-5 bg-dark fixed-bottom">
        <div class="container">
          <p class="m-0 text-center text-white">
            Copyright &copy; 2020
          </p>
          <Row>
            <Col>.col</Col>
            <Col>.col</Col>
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