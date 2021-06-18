import "./App.css";
import React from "react";
import Login from "./components/Login";
import Plant from "./components/plantComponent";
import PlantHelper from "./components/plantComponentHelper";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
        
      </header>
      <Plant />
    </div>
  );
}

export default App;
