import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/name")
      .then((res) => res.json())
      .then((data) => setNames(data));
  }, [1]);

  return (
    <div className="App">
      <div className="header">List Of Employee</div>
      {console.log(names)}
      <ul>
        {names.map((name, index) => (
          <li className="list_employees" key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
