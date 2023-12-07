import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Home from './Components/Home.js';
import Rain from './Components/Rain.js';
import WD from './Components/Wd.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Rain">Rain</Nav.Link>
              <Nav.Link href="/WD">WD</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Switch>
          <Route path="/WD">
            <WD />  
          </Route>

          <Route path="/Rain">
            <Rain />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

