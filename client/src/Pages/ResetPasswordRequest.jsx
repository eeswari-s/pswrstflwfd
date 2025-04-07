import { useState } from "react";
import axios from "axios";
import "./Login.css";
const ResetPasswordRequest = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendLink = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://pswrstflw.onrender.com/api/auth/reset-password-request", { email });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="animated-bg d-flex justify-content-center align-items-center vh-100">
     <div class="glass-box border-gradient p-4">
        <h2 className="text-white text-2xl font-semibold mb-4 text-center">Reset Password</h2>
        <form onSubmit={handleSendLink} className="flex flex-col gap-4">
        <div className="mb-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required/>
          </div>
          <button type="submit" className="btn btn-primary w-100 mb-3">
          Submit
        </button>
        </form>
        {message && (
          <p className="mt-4 text-white text-center text-sm text-green-700 font-medium">{message}</p>
        )}
      </div>
    </div>
  );
};

export default ResetPasswordRequest;
