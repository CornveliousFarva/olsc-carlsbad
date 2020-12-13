import React from 'react';
import {
  Container, Row, Col 
} from 'reactstrap';
import Footer from './footer'

const GroupPics = (props) => {
  <Container>
    <Row>
      <Col>
        <img src="images/groupPics/group-1.jpg" className="groupPic1" alt="group pic no .1"/>
      </Col>
      <Col>
      <img src="images/groupPics/group-2.jpg" className="groupPic1" alt="group pic no .2"/>
      </Col>
      <Col>
      <img src="images/groupPics/group-3.jpg" className="groupPic1" alt="group pic no .3"/>
      </Col>
      <Col>
      <img src="images/groupPics/group-4.jpg" className="groupPic1" alt="group pic no .4"/>
      </Col>
    </Row>
    <Row>
      <Col>
      <img src="images/groupPics/group-5.jpg" className="groupPic1" alt="group pic no .5"/>
      </Col>
      <Col>
      <img src="images/groupPics/group-6.jpg" className="groupPic1" alt="group pic no .6"/>
      </Col>
      <Col>
      <img src="images/groupPics/group-7.jpg" className="groupPic1" alt="group pic no .7"/>
      </Col>
      <Col>
      <img src="images/groupPics/group-8.jpg" className="groupPic1" alt="group pic no .8"/>
      </Col>
    </Row>
    <Footer />
  </Container>
}

export default GroupPics;