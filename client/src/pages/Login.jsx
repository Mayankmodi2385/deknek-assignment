import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // ✅ FIXED

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // ✅ FIXED

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "https://deknek-assignment-gzjr.onrender.com/login",
        { email, password }
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("email", res.data.email);

      navigate("/dashboard"); // ✅ FIXED
    } catch (err) {
      alert(err.response?.data || "Login failed");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={handleLogin}>Login</button>

      <p style={{ marginTop: "20px" }}>
        Don’t have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}