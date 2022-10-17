import "./App.css";
import React, { useState, useEffect } from "react";

function App() {

  const storedDarkMode = localStorage.getItem("DARK_MODE");

  const [darkMode, setDarkMode] = useState(JSON.parse(storedDarkMode));

  const toggleDarkMode = () => {
    setDarkMode(darkMode ? false : true)
  };

  useEffect(() => {
    localStorage.setItem("DARK_MODE", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className="App" data-theme={darkMode ? "dark" : "light"}>
      <h1>Hello there!</h1>
      <h2>
        Let's create a dark mode toggle that persists when the page is reloaded.
      </h2>
      <button onClick={toggleDarkMode}>{darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}</button>
    </div>
  );
}

export default App;
