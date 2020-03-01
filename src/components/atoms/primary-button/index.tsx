import React from 'react'
import { ButtonType } from '../../../interfaces'


export default (props: ButtonType) => {
    return (
        <button 
            className="a-primary-button" 
            onClick={() => {
                window.scrollTo({
                    top: 4000,
                    behavior: 'smooth'
                })
            }}>
                {props.text}
        </button>
    )
}