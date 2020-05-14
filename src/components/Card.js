import React from 'react';

import './Card.css';

const RC = React.Component;

function CardBorder(props)
{
    return (
        <div className="cardBorder">
            {props.children}
        </div>
    )
}

function CardTitle(props)
{
    return (
        <div className="cardTitle">
            {props.name}
        </div>
    )
}

function CardImage(props)
{
    console.log('image should be: ', props.image);
    return (
        <div className="cardImage" style={{backgroundImage: `url(${props.image})`}}></div>
    )
}

class Card extends RC 
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        let image;
        if (this.props.sprites)
        {
            image = <CardImage image={this.props.sprites.front_default} />
        }
        else
        {
            image = '';
        }
        return (
            <CardBorder>
                <CardTitle name={this.props.name} />
                {image}
            </CardBorder>
        )
    }
}

export default Card;