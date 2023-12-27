// Importing necessary dependencies and components
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Home from './Components/Home.js';
import Rain from './Components/Rain.js';
import WD from './Components/WD.js';
// Main App component
function App() {
  return (
    // Setting up the routes for the navbar
    <Router>
      <div className="App">
        {/* Navbar for the app */}
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Nav>
              <Nav.Link href="/Home">Home</Nav.Link><br></br>
              <Nav.Link href="/Rain">Rain</Nav.Link><br></br>
              <Nav.Link href="/WD">Weather Data</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        {/* Switch to render components based on the route */}
        <Switch>
          {/* Route for the WD component */}
          <Route path="/WD">
            <WD />  
          </Route>
          {/* Route for the Rain component */}
          <Route path="/Rain">
            <Rain />
          </Route>
          {/* Route for the Home component */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

