import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        }
    }
    handleChange = (e) => {

        this.setState({ [e.currentTarget.name]: e.currentTarget.value });

    }
    handleSubmit = async (e) => {
        e.preventDefault();

        const loginResponse = await fetch('http://localhost:9000/auth/login', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const parsedResponse = await loginResponse.json();

        if (parsedResponse.data === 'login successful') {
            // switch our route.
            // Programmatically switching to a new route.
            this.props.history.push('Gifs.jsx');
        }

    }
    render() {
        return (
            <form className="login-input" onSubmit={this.handleSubmit}>
                <div class="form-group">
                    <label for="formGroupExampleInput">Username: </label>
                    <input className="form-control" type="text" name="username" id="formGroupExampleInput" placeholder="username" onChange={this.handleChange} />
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput2">Password: </label>
                    <input className="form-control" type="password" name="password" id="formGroupExampleInput2" placeholder="password" onChange={this.handleChange} />
                </div>
                <button className="btn btn-info log m-2">Login</button>
            </form>
        )
    }
}

export default Login;