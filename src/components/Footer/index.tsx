import React from 'react'
import { Input } from '../index'
import { logo } from '../../images'
import useSignUpForm from '../Form/signUp';

export default () => {
    const signUp = useSignUpForm()
    const href = "https://github.com/maximebergerard"
    return (
        <footer className="o-footer">
            <div className="m-footer__company">
                <img src={logo} alt="logo"/>
                <p className="a-paragraph">
                    Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. USA & CAN: 18881234567 Address: 34 Brokel Rd. NY
                </p>
            </div>
            <div className="m-footer__support">
                <h4 className="a-h4">Support</h4>
                <ul className="a-footer__list list__body">
                    <li><a href={href}>Help</a></li>
                    <li><a href={href}>Center</a></li>
                    <li><a href={href}>Contact US</a></li>
                </ul>
            </div>
            <div className="aboutUs">
                <h4 className="a-h4">About Us</h4>
                <ul className="a-footer__list list__body">
                    <li><a href={href}>About Us</a></li>
                    <li><a href={href}>Center</a></li>
                    <li><a href={href}>Contact US</a></li>
                </ul>
            </div>
            <div className="newsletter">
                <h4 className="a-h4">Get newsletter</h4>
                <Input
                    type="email"
                    name="mail"
                    placeholder="email"
                    onChange={signUp.handleInputChange}
                    value={signUp.inputValue.mail}
                    required={false}
                />
            </div>
        </footer>
    )
}