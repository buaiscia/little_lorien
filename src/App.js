import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Header from './Components/header/header.component';
import Landing from './pages/landing/landing.component';
import Art from './pages/art/art.component';
import About from './pages/about/about.component';
import Contact from './pages/contact/contact.component';
import NotFound from './pages/notfound/notfound.component';

import WoodCarving from './Components/woodcarving/woodcarving.component';
import CandlePainting from './Components/candles/candles.component';
import Ceramics from './Components/ceramics/ceramics.component';
import Gingerbread from './Components/gingerbread/gingerbread.component';
import Miscellaneous from './Components/misc/misc.component';


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
          <Route exact path="/art/woodcarving">
            <WoodCarving />
          </Route>
          <Route exact path="/art/ceramics">
            <Ceramics />
          </Route>
          <Route exact path="/art/candle-painting">
            <CandlePainting />
          </Route>
          <Route exact path="/art/gingerbread">
            <Gingerbread />
          </Route>
          <Route exact path="/art/miscellaneous">
            <Miscellaneous />
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
