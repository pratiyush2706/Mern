import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar, NavbarGroup, Alignment, NavbarHeading, NavbarDivider, Button, Classes } from '@blueprintjs/core';

import Create from './components/Create';
import Home from './components/Home';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar className="bp3-dark">
          <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading> Todo App</NavbarHeading>
            <NavbarDivider />
            <Link to="/">
              <Button className={Classes.MINIMAL} icon="home" text="Home" />
            </Link>
            <Link to="/create">
              <Button className={Classes.MINIMAL} icon="edit" text="Create" />
            </Link>
          </NavbarGroup>
        </Navbar>
        <Route path="/" exact component={Home} />
        <Route path="/create" component={Create} />
      </Router>
    </div>
  )
};

export default App;