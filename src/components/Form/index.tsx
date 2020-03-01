import React from 'react'
import useSignUpForm from './signUp';
import { Input } from '../index'

export default () => {
    const signUp = useSignUpForm() 
    return (
        <div className="o-form">
            <span className="category">contact us</span>
            <h3 className="text-white">Over 1000 designers are using ...</h3>
            {/* we should use post method on form here */}
            <form method="get" onSubmit={signUp.handleSubmit}>
                <Input 
                    type="text"
                    name="name"
                    placeholder="full name"
                    onChange={signUp.handleInputChange}
                    value={signUp.inputValue.name}
                    required
                />
                <Input 
                    type="email"
                    name="mail"
                    placeholder="your email"
                    onChange={signUp.handleInputChange}
                    value={signUp.inputValue.mail}
                    required
                />
                <Input 
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={signUp.handleInputChange}
                    value={signUp.inputValue.password}
                    required
                />
                <button 
                    className="a-button__primary" 
                    type="submit"
                >
                    try now
                </button>
            </form>
            <p className="a-paragraph">By signing up you agree to our <a href="https://dribbble.com/shots/5964941-Gameboy" target="_blank" rel="noopener noreferrer"><u>Terms & Services</u></a></p>
        </div>
    )
}