import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './pages/landing/landing';

import About from './pages/about/about';
import Contact from './components/contact/contact';

import './App.css';

class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            component={Landing}
          />
          <Route
            path="/about"
            component={About}
          />
          <Route
            path="/contact"
            component={Contact}
          />
        </Switch>
      </div>
    );
  }


}

export default App;
