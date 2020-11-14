import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            {/* Insert OLSC image here */}
            {/* <img
              src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
              alt="avatar"
              className="avatar-img"
              /> */}


            <div className="banner-text">
              <h1>Official Liverpool FC Supporters Club- Carlsbad, California</h1>

            <hr/>

          <p>Community | Unity | Passion</p>
          <p>Representing Liverpool FC fans in Northern San Diego</p>

        <div className="social-links">

          {/* Twitter */}
          <i class="fa fa-twitter" aria-hidden="true"></i>

          {/* Instagram */}
          <i class="fa fa-instagram" aria-hidden="true"></i>

          {/* Facebook */}
          <i class="fa fa-facebook" aria-hidden="true"></i>

          {/* Senor Grubby's link */}

          {/* McCann Studio link */}
        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
