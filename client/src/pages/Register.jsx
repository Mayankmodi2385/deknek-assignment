import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 👁️
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post(
        "https://deknek-assignment-gzjr.onrender.com/register",
        { email, password }
      );

      alert("Registered Successfully ✅");
      navigate("/");
    } catch (err) {
      alert(err.response?.data || "Error");
    }
  };

  return (
    <div className="auth-container">
      <div className="card">

        <div className="card-header">
          <h2>Create Account</h2>
          <p>Sign up to continue</p>
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

        <button onClick={handleRegister}>Register</button>

        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>

      </div>
    </div>
  );
}