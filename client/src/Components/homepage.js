import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Landing = (props) => {
  return (
    <div class="homepage-div">
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Official Liverpool FC Supporters Club- Carlsbad, California</h1>
          <hr className="my-2" />
          <h2> Community | Unity | Passion</h2>
          <hr className="my-2" />
          <h3>Representing Liverpool FC supporters in Northern San Diego</h3>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Landing;

