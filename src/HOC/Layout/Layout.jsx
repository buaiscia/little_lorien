import React, { Component } from 'react';
import { BrowserRouter, Suspense } from 'react-router-dom';

import Landing from '../../Components/Landing';

class Layout extends Component {

   

    render() {

        const landing = null;
        
        return (
            <BrowserRouter>
                <React.Fragment>
                    <h1>Layout page</h1>
                    
                    <Landing />
                </React.Fragment>
            </BrowserRouter>

        )
    }
}

export default Layout;