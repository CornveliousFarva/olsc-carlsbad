import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Footer from './Footer'


class Home extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
          
            <div className="banner-text">
        
              <h1>Official Liverpool FC Supporters Club - Carlsbad, California</h1>
                <p>Community | Unity | Passion</p>
                <p>Representing supporters of Liverpool FC in Northern San Diego.</p>
            <hr/>

            </div>
            <Footer/>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Home;