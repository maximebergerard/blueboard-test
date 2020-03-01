import React from 'react'
import { CardType } from '../../interfaces'

export default (props: CardType) => {
    return (
        <div className={props.className}>
            <div className="m-card__description">
                <span className="category">{props.category}</span>
                <h3>{props.title}</h3>
                <p className="a-paragraph">{props.paragraph}</p>
            </div>
            <div className="m-card__images">
                <img src={props.image} alt="new design"/>
            </div>
        </div>
    )
}