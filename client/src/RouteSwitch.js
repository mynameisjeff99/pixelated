import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import {LogIn, SignUp} from "./components/User";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navigation";


const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default RouteSwitch;