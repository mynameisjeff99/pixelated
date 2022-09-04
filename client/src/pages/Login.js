// import {Link} from 'react-router-dom';

/*function Login() {
  const googleAuth = () => {
    window.open(
      `http://localhost:8000/auth/google/callback`
    );
  };
  return (
    <div>
      <button className='google_btn' onClick={googleAuth}> Google Log In </button>
    </div>
  )
}

export default Login; */
import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const googleAuth = () => {
      window.open(
        `http://localhost:8000/auth/google/callback`
      );
    };
    return (
      <div>
        <h1>User Log In</h1>
        <form>
          <label>
            Username:
            <input type="text" name="username" required="true"/>
          </label>
          <label>
            Password:
            <input type="password" name="password" required="true"/>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <button className='google_btn' onClick={googleAuth}> Google Log In </button>
      </div>
    )
  }
};

export default Login