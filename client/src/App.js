import React, { useState } from 'react';
import {
  Collapse,
  Button,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import Main from './components/main';
import { Link } from 'react-router-dom'

const App = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/homepage">OLSC Carlsbad</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Button tag={Link} to="/about">About</Button>
            </NavItem>
            <NavItem>
            <Button tag={Link} to="/events">Events</Button>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Pictures
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/components/groupPics">
                  Group Pics
                </DropdownItem>
                <DropdownItem href="/components/scarfPics">
                  Scarf Pics
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
      <Main/>
    </div>
  );
}

export default App;