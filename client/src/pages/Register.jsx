import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // 🔥 loader
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      setLoading(true);

      await axios.post(
        "https://deknek-assignment-gzjr.onrender.com/register",
        { email, password }
      );

      alert("Registered Successfully ✅");
      navigate("/");

    } catch (err) {
      alert(err.response?.data || "Error");
    } finally {
      setLoading(false);
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

        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleRegister} disabled={loading}>
          {loading ? <div className="spinner"></div> : "Register"}
        </button>

        <p style={{ marginTop: "15px", textAlign: "center" }}>
          Already have an account? <Link to="/">Login</Link>
        </p>

      </div>
    </div>
  );
}