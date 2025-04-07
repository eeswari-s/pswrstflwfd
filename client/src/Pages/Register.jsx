import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css"; // Import your CSS file for styles

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://pswrstflw.onrender.com/api/auth/register", formData);
      setMessage(res.data.message);
      navigate("/login");
    } catch (err) {
      setMessage(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="animated-bg d-flex justify-content-center align-items-center vh-100">
     <div class="glass-box border-gradient p-4">
        <h2 className="text-center fw-bold mb-4 text-primary">Register</h2>
        <form onSubmit={handleRegister} className="flex flex-col gap-4">
        <div className="mb-3">
          <input
            type="text"
            name="name"
            placeholder="Name"
          className="form-control"
            value={formData.name}
            onChange={handleChange}
            required/>
            </div>
           <div className="mb-3">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required />
          </div>
          <div className="mb-3">
          <input
            type="password"
            name="password"
            placeholder="Password"
             className="form-control"
            value={formData.password}
            onChange={handleChange}
            required />
            </div>
          <button type="submit" className="btn btn-primary w-100 mb-3">
            Submit
          </button>
        </form>
        <p className="mt-4 text-white text-center">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")} className="text-white cursor-pointer">
            Login
          </span>
        </p>
        {message && <p className="text-success text-center mt-2 small">{message}</p>}
      </div>
    </div>
  );
};

export default Register;
