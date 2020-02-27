/** @jsx jsx */

import { jsx } from '@emotion/core'

import bckImage from '../../images/background-header.png';


export default () => {
    return (
        <header className="header">
            <h1 className="a-h1">You will need no other platform</h1>
            <img src={bckImage} alt="Background"/>
        </header>
    )
}