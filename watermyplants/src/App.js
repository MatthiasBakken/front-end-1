import "./App.css";
import React from "react";
import Login from "./components/Login";
<<<<<<< HEAD
import Plant from "./components/plantComponent";
import Registration from "./components/Registration";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
=======
<<<<<<< HEAD
import userProfile from "./components/userProfile";
=======
import Registration from "./components/Registration";
>>>>>>> main

import Plant from './components/plantComponentForm.js'
import PlantHelper from "./components/plantComponentHelper";
>>>>>>> main

function App() {
  return (
    <div className="App">
      <header className="App-header">
<<<<<<< HEAD
        <Header />
      </header>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/adduser" component={Registration} />
        <Route path="/addplant" component={Plant} />
      </Switch>
=======
        <Login />
<<<<<<< HEAD
<<<<<<< HEAD
        
=======
        <userProfile />

>>>>>>> 4f9f90bdeb3950e5ddb0bdf63106e5df12f816dc
=======
        <Registration />
>>>>>>> main
      </header>
>>>>>>> main
    </div>
  );
}

export default App;
