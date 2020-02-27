import React from 'react'
import { ButtonInterface } from '../../../interfaces'


export default (props: ButtonInterface) => {
    return (
        <button className="a-primary-button">{props.text}</button>
    )
}