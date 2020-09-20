import React, { Component } from 'react';

import MenuItem from '../../Components/menu-item/menu-item.component';

import './art.styles.scss';

class ArtPage extends Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'woodcarving',
                    imageUrl: 'https://i.pinimg.com/originals/90/ef/f2/90eff29ec1a08f1e643889917706eb45.jpg',
                    id: 1,
                    linkUrl: '/woodcarving'
                },
                {
                    title: 'gingerbread',
                    imageUrl: 'https://www.oetker.co.uk/Recipe/Recipes/oetker.co.uk/uk-en/baking/image-thumb__72012__RecipeDetail/gingerbread-men-and-reindeers.jpg',
                    id: 2,
                    linkUrl: '/gingerbread'
                },
                {
                    title: 'ceramics',
                    imageUrl: 'https://c8.alamy.com/comp/EMYECX/women-participating-in-a-pottery-class-art-class-making-ceramics-london-EMYECX.jpg',
                    id: 3,
                    linkUrl: '/ceramics'
                },
                {
                    title: 'candles',
                    imageUrl: 'https://render.fineartamerica.com/images/rendered/default/print/6.5/8/break/images/artworkimages/medium/1/candles-oil-painting-natalja-picugina.jpg',
                    id: 4,
                    size: 'large',
                    linkUrl: '/candle-painting'
                },
                {
                    title: 'misc',
                    imageUrl: 'https://image.shutterstock.com/image-photo/artist-applying-henna-tattoo-on-260nw-382249735.jpg',
                    id: 5,
                    size: 'large',
                    linkUrl: '/miscellaneous'
                }
            ]
        }
    }

    render() {
        return (
            <div className="art-menu">
                {this.state.sections.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                    )
                )}
            </div>
        )
    }
}

export default ArtPage;