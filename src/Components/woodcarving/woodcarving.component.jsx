import React, { Component } from 'react';

import './woodcarving.style.scss';


class WoodCarving extends Component {
    constructor() {
        super();

        this.state = {
            carvingWorks: [
                {
                    title: 'one',
                    imageUrl: 'https://i.pinimg.com/originals/90/ef/f2/90eff29ec1a08f1e643889917706eb45.jpg',
                    id: 1
                },
                {
                    title: 'two',
                    imageUrl: 'https://i.pinimg.com/originals/90/ef/f2/90eff29ec1a08f1e643889917706eb45.jpg',
                    id: 2
                },
                {
                    title: 'three',
                    imageUrl: 'https://i.pinimg.com/originals/90/ef/f2/90eff29ec1a08f1e643889917706eb45.jpg',
                    id: 3
                },
            ],
            spacing: 2
        }
    }

    render() {


        const Header = () => (
            <div className="wood-header">
                <h3>WoodCarving</h3>
                <p>Click on an image to open a gallery</p>

            </div>
        );

        const ImagesGrid = ({ title, imageUrl }) => (
            <div className="item-grid">
                <div className="title-grid">
                    <p>{title}</p>
                </div>
                <div className="img-grid">
                    <p><img src={imageUrl} alt=""></img> </p>
                </div>
            </div>
        )

        return (
            <div>
                <Header />
                <div className="grid">
                    {this.state.carvingWorks.map(({ id, ...otherProps }) => (
                        <ImagesGrid key={id} {...otherProps} />
                    ))}
                </div>
                {/* <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={this.state.spacing}>
                            {this.state.carvingWorks.map(({ id, ...otherProps }) => (
                                <Grid key={id} item>
                                    <ImagesGrid className={classes.paper} {...otherProps} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid> */}
            </div>
        )

    }

}



export default WoodCarving;
