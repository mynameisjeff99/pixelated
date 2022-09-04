import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      username: this.state.username,
      password: this.state.password
    };

    axios
      .post('http://localhost:8082/api/user', data)
      .then(res => {
        this.setState({
          username: '',
          password:'',
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in SignUp!");
      })
  };

  render() {
    return (
      <div>
        <h1>User Sign Up</h1>
        <form onSubmit={this.onSubmit}>
          <label>
            Username:
            <input type="text" placeholder="Username" name="username"
            value={this.state.username} onChange={this.onChange}/>
          </label>
          <label>
            Password:
            <input type="password" name="password"
            value={this.state.password} onChange={this.onChange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default SignUp;