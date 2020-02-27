import React from 'react'
import { CardInterface } from '../../../interfaces'

export default (props: CardInterface) => {
    return (
        <div className={props.className}>
            <div className="m-card-description">
                <span className="a-card-category">{props.category}</span>
                <h3 className="a-card-h3">{props.title}</h3>
                <p className="a-card-p">{props.paragraph}</p>
            </div>
            <div className="m-card-images">
                <img src={props.image} alt="new design"/>
            </div>
        </div>
    )
}