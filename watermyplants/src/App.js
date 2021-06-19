import "./App.css";
import React from "react";
import Login from "./components/Login";
import Registration from "./components/Registration";

import Plant from './components/plantComponentForm.js'
import PlantHelper from "./components/plantComponentHelper";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
        <Registration />
      </header>
    </div>
  );
}

export default App;
