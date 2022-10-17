
import './App.css';
import React from 'react';
import  SearchBoxFunction  from "./SearchBoxFunction";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <React.StrictMode>
      <h1>Github user search</h1>
      <br />
      <div>
        <SearchBoxFunction/>
      </div>
      </React.StrictMode>
      </header>
    </div>
  );
}

export default App;
