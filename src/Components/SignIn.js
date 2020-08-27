import React from "react";

//Styles
import './signin.scss'

const SignIn = () => {
    return(
        <div className="signIn">
            <div className="box">
                <input type="checkbox" id="toggle" className="box__toggle" hidden/>
                    <img className="box__image" src="https://picsum.photos/300"/>
                
                {/* Sign up form */}
                <form className="form form__register" action="">
                    <h1 className="form__title">Sign Up</h1>
                    {/* User */}
                    <div className="form__helper">
                        <input className="form__input" id="new-user" type="text" name="user" placeholder="User"></input>
                        <label className="form__label" for="new-user">User</label>
                    </div>
                    {/* Email */}
                    <div className="form__helper">
                        <input className="form__input" type="email" name="email" id="email" placeholder="Email"></input>
                        <label className="form__label" for="email">Email</label>
                    </div>
                    {/* Password */}
                    <div className="form__helper">
                        <input className="form__input" type="password" name="password" id="new-user-password" placeholder="Password"></input>
                        <label className="form__label" for="new-user-password">Password</label>
                    </div>
                    {/* Confirm Password */}
                    <div className="form__helper">
                        <input className="form__input" type="password" name="password" id="confirm-password" placeholder="Confirm Password"></input>
                        <label className="form__label" for="confirm-password">Confirm Password</label>
                    </div>

                    {/* Submit Button */}

                    <button type="submit" className="form__button">Register</button>
                    <p className="form__text">Already have an account?</p>
                    <label for="toggle" className="form__link">Sign In!</label>
                </form>

                {/* ---------------------- */}

                {/* Sign In form (default) */}
                <form className="form form__register" action="">
                    <h1 className="form__title">Sign In</h1>

                    {/* User */}
                    <div className="form__helper">
                        <input className="form__input" id="new-user" type="text" name="user" placeholder="User"></input>
                        <label className="form__label" for="new-user">User</label>
                    </div>

                    {/* Password */}
                    <div className="form__helper">
                        <input className="form__input" type="password" name="password" id="new-user-password"
                                placeholder="Password"></input>
                        <label className="form__label" for="new-user-password">Password</label>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="form__button">Log in</button>
                    <p className="form__text">Don't have an account?</p>
                    <label for="toggle" className="form__link">Sign Up!</label>
                </form>

            </div>
        </div>
    )
}

export default SignIn;