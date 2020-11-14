import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Bar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">Official Liverpool FC Supporters Club, Carlsbad, CA</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
          <NavItem>
              <NavLink href="../Home">Homepage</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="../About">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="../Events">Events</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="../Pics">Pics</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Bar;