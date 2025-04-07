// src/components/ResetPasswordForm.jsx
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ResetPasswordForm = () => {
  const { token } = useParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:5000/api/auth/reset-password/${token}`, {
        email,
        password,
        confirmPassword,
      });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response.data.message || "Error");
    }
  };

  return (
    <div className="container mt-5">
      <h3>Reset Your Password</h3>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label>Email address</label>
          <input type="email" className="form-control"
            value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>New Password</label>
          <input type="password" className="form-control"
            value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Confirm Password</label>
          <input type="password" className="form-control"
            value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Reset Password</button>
      </form>
      {message && <p className="mt-3 text-info">{message}</p>}
    </div>
  );
};

export default ResetPasswordForm;
