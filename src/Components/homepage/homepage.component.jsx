import React, { Component } from 'react';

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
                        Misc
                    </li>
                    <li>
                        Candles
                    </li>
                    <li>
                        Ceramics
                    </li>
                    <li>
                        Gingerbread
                    </li>
                    <li>
                        Wood carving
                    </li>
                </ul>
            </div>
        )
    }
}

export default Homepage;