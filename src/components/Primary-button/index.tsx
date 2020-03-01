import React from 'react'
import { ButtonType } from '../../interfaces'


export default (props: ButtonType) => {
    return (
        <button 
            className="a-button__primary" 
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