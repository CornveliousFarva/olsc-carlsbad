import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, Footer, LandingPage, About, Events, ScarfPics, GroupPics } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <LandingPage />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Events />} />
          <Route path="/contact" exact component={() => <ScarfPics />} />
          <Route path="/contact" exact component={() => <GroupPics />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;