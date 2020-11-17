import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { DropdownToggle, DropdownMenu, } from 'reactstrap'
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Official Liverpool FC Supporters Club-Carlsbad, CA</Link>} scroll>
            <Navigation>
                <Link to="/about">About Us</Link>
                <Link to="/events">Events</Link>
                <Link to="/contact">Contact</Link>
                <DropdownToggle>
                  Pics
                </DropdownToggle>
                  <DropdownMenu>
                    <Link to="/groupPics">Group Pics</Link>
                    <Link to="/scarfPics">Scarf Pics</Link>
                  </DropdownMenu>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Official Liverpool FC Supporters Club-Carlsbad, CA</Link>}>
        <Navigation>
                <Link to="/about">About Us</Link>
                <Link to="/events">Events</Link>
                <Link to="/contact">Contact</Link>
                <DropdownToggle>
                  Pics
                </DropdownToggle>
                  <DropdownMenu>
                    <Link to="/groupPics">Group Pics</Link>
                    <Link to="/scarfPics">Scarf Pics</Link>
                  </DropdownMenu>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;