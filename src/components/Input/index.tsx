import React, { FunctionComponent } from 'react'
import { InputProps } from '../../interfaces'

const Input: FunctionComponent<InputProps> = (props: InputProps) => {
    return <input {...props} />;
};

export default Input