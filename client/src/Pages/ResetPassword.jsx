import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const ResetPassword = () => {
  const { token } = useParams();
  const [email, setEmail] = useState(""); // optional
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`https://pswrstflw.onrender.com/api/auth/reset-password/${token}`, {
        email,
        password,
        confirmPassword,
      });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="animated-bg d-flex justify-content-center align-items-center vh-100">
   <div class="glass-box border-gradient p-4">
        <h2 className="text-center fw-bold mb-4 text-primary">Set New Password</h2>
        <form onSubmit={handleReset} className="flex flex-col gap-4">
        <div className="mb-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />
            </div>
          <div className="mb-3">
          <input
            type="password"
            placeholder="New Password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required />
            </div>
          <div className="mb-3">
          <input
            type="password"
            placeholder="Confirm Password"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required/>
            </div>
          <button type="submit" className="btn btn-primary w-100 mb-3">
            Reset Password
          </button>
        </form>
        {message && (
          <p className="mt-4 text-center text-sm text-green-700 font-medium">{message}</p>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
