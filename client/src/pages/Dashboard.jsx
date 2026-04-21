import { useEffect, useState } from "react";

export default function Dashboard() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  const email = localStorage.getItem("email");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/";
    }

    // Load saved notes
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  const addNote = () => {
    if (!note) return;

    const updatedNotes = [...notes, note];
    setNotes(updatedNotes);

    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setNote("");
  };

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Dashboard 🚀</h1>

      <h3>Welcome, {email} 👋</h3>

      <button onClick={logout}>Logout</button>

      <hr style={{ margin: "30px" }} />

      <h3>Add Notes</h3>

      <input
        placeholder="Write something..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button onClick={addNote}>Add</button>

      <ul>
        {notes.map((n, index) => (
          <li key={index}>{n}</li>
        ))}
      </ul>
    </div>
  );
}