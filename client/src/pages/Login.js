import React, { Component } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirectTo: null,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleSubmit(event) {
    event.preventDefault()
    console.log('handleSubmit')
    axios.post(`${process.env.REACT_APP_API_URI}auth/login`, {
      username: this.state.username,
      password: this.state.password
    }).then(response => {
      console.log(response)
      if (response.status === 200) {
        // update the state
        this.setState({
          redirectTo: '/'
        })
      } else {
        console.log('Sign up failed')
        alert('Sign up failed')
      }
    })
  };

  render() {
    if (this.state.redirectTo) {
      return <Navigate to={{ pathname: this.state.redirectTo}} />
    }
    return (
      <div className="LoginForm">
        <h1>Log In</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username: </label>
          <input 
            type="text" 
            name="username"
            value={this.state.username} 
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="password">Password: </label>
          <input 
            type="password" 
            name="password"
            value={this.state.password} 
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="Log In"/>
        </form>
      </div>
    );
  };
};

export default Login;