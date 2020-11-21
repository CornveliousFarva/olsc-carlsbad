import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import "./App.css";
import Home from './components/homepage';
import About from './components/about';
import Events from './components/events';
import Navbar from './components/CustomNavbar';
import GroupPics from './components/groupPics';
import ScarfPics from './components/scarfPics';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/events" component={Events} />
          <Route path="/groupPics" component={GroupPics} />
          <Route path="/scarfPics" component={ScarfPics} />
        </div>
      </Router>
    );
  }
}

export default App;


// const App = (props) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <div class="navbar">
//       <Navbar color="light" light expand="md">
//         <NavbarBrand href="/">OLSC Carlsbad</NavbarBrand>
//         <NavbarToggler onClick={toggle} />
//         <Collapse isOpen={isOpen} navbar>
//           <Nav className="mr-auto" navbar>
//             <NavItem>
//               <Button tag={Link} to="/about">About</Button>
//             </NavItem>
//             <NavItem>
//             <Button tag={Link} to="/events">Events</Button>
//             </NavItem>
//             <UncontrolledDropdown nav inNavbar>
//               <DropdownToggle nav caret>
//                 Pictures
//               </DropdownToggle>
//               <DropdownMenu right>
//                 <Button tag={Link} to="/groupPics">
//                   Group Pics
//                 </Button>
//                 <Button tag={Link} to="/scarfPics">
//                   Scarf Pics
//                 </Button>
//               </DropdownMenu>
//             </UncontrolledDropdown>
//           </Nav>
//         </Collapse>
//       </Navbar>
//       <Main/>
//     </div>
//   );
// }

// export default App;