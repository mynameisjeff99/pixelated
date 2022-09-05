import React, { Component } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      redirectTo: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit(event) {
    event.preventDefault()
    if (this.state.password !== this.state.confirmPassword) {
      console.log('Passwords are inconsistent')
      alert('Passwords are inconsistent')
    } else {
      axios.post(`${process.env.REACT_APP_API_URI}auth/signup`, {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log(response)
        if (!response.data.errmsg) {
          console.log('Successfully signed up');
          this.setState({
            redirectTo: '/login'
          })
        } else {
          console.log('Duplicate username')
          alert('Duplicate username')
        }
      });
    };
  };

  render() {
    if (this.state.redirectTo) {
      return <Navigate to={{ pathname: this.state.redirectTo}} />
    }
    return (
      <div className="SignupForm">
        <h1>Sign up</h1>
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
          <label htmlFor="confirmPassword">Confirm Password: </label>
          <input 
            type="password" 
            name="confirmPassword"
            value={this.state.confirmPassword} 
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="Sign Up"/>
        </form>
      </div>
    );
  };
};

export default Signup;