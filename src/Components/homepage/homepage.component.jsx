import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Homepage extends Component {
    constructor()  {
        super()
    }

    render() {
        return (
            <div>
                <h1>Little Lorien</h1>
                <ul>
                    <li>
                        <Link to="/about">
                            Misc
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/art/misc">
                            Misc
                        </Link>
                    </li>
                    <li>
                        <Link to="/art/candles">
                            Candles
                        </Link>
                    </li>
                    <li>
                        <Link to="/art/ceramics">
                            Ceramics
                        </Link>
                    </li>
                    <li>
                        <Link to="/art/gingerbread">
                            Gingerbread
                        </Link>
                    </li>
                    <li>
                        <Link to="/art/woodcarving">
                            Woodcarving
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Homepage;