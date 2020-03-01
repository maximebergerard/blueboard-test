import React from 'react'
import { PrimaryButton, PlayButton } from '../index'
import bckImage from '../../images/background-header.png';

export default () => {
    return (
        <header className="o-header">
            <h1 className="a-h1">You will need no other platform</h1>
            <PlayButton />
            <PrimaryButton text="try now"/>
            <img src={bckImage} alt="Background"/>
        </header>
    )
}