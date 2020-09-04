import React from "react";

//Styles
import './signin.scss'

class SignIn extends React.Component {
    state = {
        username: "",
        password: "",
        address: "",
        city: "",
        stateInits: "",
        zip: ""
    }


    handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
        [event.target.name]: event.target.value
    })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        fetch('http://localhost:3000/api/v1/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
                body: JSON.stringify({
                "user": {
                    username: this.state.username,
                    password: this.state.password,
                    address: this.state.address,
                    city: this.state.city,
                    stateInits: this.state.stateInits,
                    zip: this.state.zip
                }
            })
        })
        .then(resp => resp.json())
        .then(response => {
            if (response.errors) {
                alert(response.errors)
            } else {
                //this is where we'll set the user on the front end
                // this.props.setUser(response)
            }
        })
    }

    render() {
        return(
            <div className="signIn">
                <div className="box">
                    <input type="checkbox" id="toggle" className="box__toggle" hidden/>
                        <img className="box__image" src="https://picsum.photos/300"/>
                    
                    {/* Sign up form */}
                    <form className="form form__register" action="" onSubmit={this.handleSubmit}>
                        <h1 className="form__title">Sign Up</h1>
                        {/* Username */}
                        <div className="form__helper">
                            <input className="form__input" id="username" type="text" name="username" placeholder="Username" onChange={this.handleChange}></input>
                            <label className="form__label" for="username">User</label>
                        </div>
                        {/* Password */}
                        <div className="form__helper">
                            <input className="form__input" type="password" name="password" id="password" placeholder="Password" onChange={this.handleChange}></input>
                            <label className="form__label" for="password">Password</label>
                        </div>
                        {/* Address */}
                        <div className="form__helper">
                            <input className="form__input" type="text" name="address" id="new-user-address" placeholder="Address" onChange={this.handleChange}></input>
                            <label className="form__label" for="address">Address</label>
                        </div>
                        {/* City */}
                        <div className="form__helper">
                            <input className="form__input" type="text" name="city" id="city" placeholder="City" onChange={this.handleChange}></input>
                            <label className="form__label" for="city">City</label>
                        </div>
                        {/* State */}
                        <div className="form__helper">
                            <input className="form__input" type="text" name="stateInits" id="stateInits" placeholder="State" onChange={this.handleChange}></input>
                            <label className="form__label" for="stateInits">State</label>
                        </div>
                        {/* Zip */}
                        <div className="form__helper">
                            <input className="form__input" type="text" name="zip" id="zip" placeholder="Zip" onChange={this.handleChange}></input>
                            <label className="form__label" for="zip">Zip</label>
                        </div>

                        {/* Submit Button */}

                        <button type="submit" className="form__button">Register</button>
                        <p className="form__text">Already have an account?</p>
                        <label for="toggle" className="form__link">Sign In!</label>
                    </form>

                    {/* ---------------------- */}

                    {/* Sign In form (default) */}
                    <form className="form form__register" action="" onSubmit={this.handleSubmit}>
                        <h1 className="form__title">Sign In</h1>

                        {/* User */}
                        <div className="form__helper">
                            <input className="form__input" id="new-user" type="text" name="user" placeholder="User" onChange={this.handleChange}></input>
                            <label className="form__label" for="new-user">User</label>
                        </div>

                        {/* Password */}
                        <div className="form__helper">
                            <input className="form__input" type="password" name="password" id="new-user-password"
                                    placeholder="Password" onChange={this.handleChange}></input>
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
}

export default SignIn;