import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Header from './Components/header/header.component';
import Landing from './pages/landing/landing.component';
import Art from './pages/art/art.component';
import About from './pages/about/about.component';
import Contact from './pages/contact/contact.component';


import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    const urlPath = this.props.location.pathname
    
    return (
      <div>
        {
          urlPath !== "/" ? <Header /> : null
        }
        
        <Switch>
          <Route
            exact
            path="/"
            component={Landing}
          />
          <Route
            path="/art"
            component={Art}
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

export default withRouter(App);
