import React from 'react'
import useSignUpForm from './signUp';

export default () => {
    const signUp = useSignUpForm() 
    return (
        <div className="o-form">
            <span className="a-category">contact us</span>
            <h3 className="a-h3-white">Over 1000 designers are using ...</h3>
            {/* we should use post method here */}
            <form method="get" onSubmit={signUp.handleSubmit}>
                <input 
                    type="text"
                    name="name"
                    placeholder="full name"
                    onChange={signUp.handleInputChange}
                    value={signUp.inputValue.name}
                    required
                />
                <input 
                    type="email"
                    name="mail"
                    placeholder="your email"
                    onChange={signUp.handleInputChange}
                    value={signUp.inputValue.mail}
                    required
                />
                <input 
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={signUp.handleInputChange}
                    value={signUp.inputValue.password}
                    required
                />
                <button 
                    className="a-primary-button" 
                    type="submit"
                >
                    try now
                </button>
            </form>
            <p className="a-paragraph">By signing up you agree to our <a href="https://dribbble.com/shots/5964941-Gameboy" target="_blank" rel="noopener noreferrer"><u>Terms & Services</u></a></p>
        </div>
    )
}