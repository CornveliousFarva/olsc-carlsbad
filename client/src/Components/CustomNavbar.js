import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom'

const CustomNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div class="navbar">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">OLSC Carlsbad</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/about">About</NavLink>
              </NavItem>
              <NavItem>
              <NavLink tag={Link} to="/events">Events</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Pictures
                </DropdownToggle>
                <DropdownMenu right>
                  <NavLink tag={Link} to="/groupPics">
                    Group Pics
                  </NavLink>
                  <NavLink tag={Link} to="/scarfPics">
                    Scarf Pics
                  </NavLink>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

export default CustomNavbar