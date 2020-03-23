import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';



class Landing extends Component {
    render() {
        { console.log(this.props) }

        return (
            <React.Fragment>
                <h1>Landing page</h1>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </React.Fragment>
            


        )
        {console.log('finshed landing')}
    }
}


export default Landing;