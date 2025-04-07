import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'animate.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResetPasswordRequest from "./Pages/ResetPasswordRequest";
import ResetPassword from "./Pages/ResetPassword";
import Login from "./Pages/Login";
import Register from "./Pages/Register";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password-request" element={<ResetPasswordRequest />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
