import axios from "axios";
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navigation";

class RouteSwitch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      user: null,
    }
    this._login = this._login.bind(this);
  };

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API_URI}auth/user`)
    .then(response => {
      console.log(response.data)
      if (!!response.data.user) {
        console.log('There is a user')
        this.setState({
          loggedIn: true,
          user: response.data.user,
        })
      } else {
        this.setState({
          loggedIn: false,
          user: null,
        })
      }
    })
  };

  _login(username, password) {
		axios
    .post(`${process.env.REACT_APP_API_URI}auth/login`, {
      username,
      password
    })
    .then(response => {
      console.log(response)
      if (response.status === 200) {
        // update the state
        this.setState({
          loggedIn: true,
          user: response.data.user
        })
      }
    })
	};


  render () {
    return (
      <BrowserRouter>
        <div>
          <Navbar user={this.state.user}/>
          <Routes>
            <Route path="/" element={<App user={this.state.user}/>} />
            <Route path="/login" element={<Login _login={this._login}/>} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  };
};

/*
const RouteSwitch = () => {
  
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
*/
export default RouteSwitch;