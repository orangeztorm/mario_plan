import React, {Component} from "react";

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    };

    _handleChange = (e) => {
        this.setState({
           [e.target.id]: e.target.value,
        });
    };
    _handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    };

    render() {
        return (
            <div className="container">
                <form onSubmit={this._handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">
                        Sign Up
                    </h5>
                    <div className="input-field">
                        <label htmlFor="firstName">FirstName</label>
                        <input type="text" id='firstName' onChange={this._handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">lastName</label>
                        <input type="text" id='lstName' onChange={this._handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' onChange={this._handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' onChange={this._handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1z-depth-0">SignUp</button>
                    </div>
                </form>
            </div>
        );
    };
}

export default SignUp