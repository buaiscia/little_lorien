import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import WoodCarving from '../woodcarving/woodcarving.component';

class Homepage extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <h1>Little Lorien</h1>
                <ul>
                    <li>
                        <Link to="/about">
                            About
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
                        <Link to="/art/miscellaneous">
                            Misc
                        </Link>
                    </li>
                    <li>
                        <Link to="/art/candle-painting">
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
                            <WoodCarving />
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Homepage;
