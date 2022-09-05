import axios from "axios";
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navigation";


const RouteSwitch = () => {
  /*
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URI}auth/login/success`;
      const { data } = await axios.get(url, { withCredentials: true });
      setUser(data.user._json);
    } catch (err) {
      console.log("Not logged in");
    }
  };

  useEffect(() => {
		getUser();
	}, []);

  const [user,setLoginUser] = useState({})
  */

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

export default RouteSwitch;