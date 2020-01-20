import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Landing from '../../Components/Landing';

import About from '../../Components/About/About';
import Contact from '../../Components/Contact/Contact';

class Layout extends Component {

    render() {

        return (
            <BrowserRouter>
                <React.Fragment>
                    {/* {this.props.children} */}
                    <Switch>
                        <Route path='/' exact component={Landing} />
                        <Route path='/about' component={About} />
                        <Route path='/contact' component={Contact} />
                    </Switch>
                </React.Fragment>
            </BrowserRouter>

        )
    }
}

export default Layout;