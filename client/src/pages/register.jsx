import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post(
        "https://deknek-assignment-gzjr.onrender.com/register",
        { email, password }
      );

      alert("Registered Successfully ✅");
      navigate("/"); // ✅ smoother navigation
    } catch (err) {
      alert(err.response?.data || "Error");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Register</h2>

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

      <button onClick={handleRegister}>Register</button>

      <p style={{ marginTop: "20px" }}>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
}