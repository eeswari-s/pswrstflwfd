import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://pswrstflw.onrender.com/api/auth/login", formData);
      setMessage(res.data.message);
      navigate("/flights");
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="animated-bg d-flex justify-content-center align-items-center vh-100">
   <div class="glass-box border-gradient p-4">
      <h2 className="text-center fw-bold mb-4 text-primary">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100 mb-3">
          Submit
        </button>
      </form>
      <p className="text-white text-center">
        Don’t have an account?{" "}
        <span className="text-blue-600 cursor-pointer" role="button" onClick={() => navigate("/")}>
          Register
        </span>
      </p>
      <p className="text-blue-600 cursor-pointer">
        <span className="text-info" role="button" onClick={() => navigate("/reset-password-request")}>
          Forgot Password?
        </span>
      </p>
      {message && <p className="text-success text-center mt-2 small">{message}</p>}
    </div>
  </div>
  );
};

export default Login;
