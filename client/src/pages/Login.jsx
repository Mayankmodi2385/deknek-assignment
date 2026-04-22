import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 👁️
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "https://deknek-assignment-gzjr.onrender.com/login",
        { email, password }
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("email", res.data.email);

      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data || "Login failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="card">

        <div className="card-header">
          <h2>Welcome Back</h2>
          <p>Sign in to your account</p>
        </div>

        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* PASSWORD WITH EYE */}
        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <span onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>

        <button onClick={handleLogin}>Login</button>

        <p>
          Don’t have an account? <Link to="/register">Register</Link>
        </p>

      </div>
    </div>
  );
}