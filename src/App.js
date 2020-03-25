import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Header from './Components/header/header.component';
import Landing from './pages/landing/landing.component';
import Art from './pages/art/art.component';
import About from './pages/about/about.component';
import Contact from './pages/contact/contact.component';
import NotFound from './pages/notfound/notfound.component';


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
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/art">
            <Art />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    );
  }


}

export default withRouter(App);
