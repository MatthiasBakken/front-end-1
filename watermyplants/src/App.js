import "./App.css";
import React from "react";
import Login from "./components/Login";
import userProfile from "./components/userProfile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
        <userProfile />

      </header>
    </div>
  );
}

export default App;
