import React, { Component } from 'react';

class ArtPage extends Component {
    constructor() {
        super()
        
        this.state = {
            sections: [
                {
                    title: 'woodcarving',
                    imageUrl: 'https://i.pinimg.com/originals/90/ef/f2/90eff29ec1a08f1e643889917706eb45.jpg',
                    id: 1,
                    linkUrl: 'art/woodcarving'
                },
                {
                    title: 'gingerbread',
                    imageUrl: 'https://www.oetker.co.uk/Recipe/Recipes/oetker.co.uk/uk-en/baking/image-thumb__72012__RecipeDetail/gingerbread-men-and-reindeers.jpg',
                    id: 2,
                    linkUrl: 'art/gingerbread'
                },
                {
                    title: 'ceramics',
                    imageUrl: 'https://cdn.vox-cdn.com/thumbor/bw0JyNwx5PY727jC-_YvvCBPsi4=/0x0:6000x4000/1200x675/filters:focal(2281x2511:3241x3471)/cdn.vox-cdn.com/uploads/chorus_image/image/64752082/bluestone11.0.jpg',
                    id: 3,
                    linkUrl: 'art/ceramics'
                },
                {
                    title: 'candles',
                    imageUrl: '',
                    id: 4,
                    linkUrl: 'art/candles'
                },
                {
                    title: 'misc',
                    imageUrl: '',
                    id: 5,
                    linkUrl: 'art/misc'
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <h1>Art page</h1>
            </div>
        )
    }
}

export default ArtPage;