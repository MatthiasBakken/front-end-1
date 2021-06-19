import "./App.css";
import React from "react";
import Login from "./components/Login";
import Plant from "./components/plantComponent";
import Registration from "./components/Registration";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import PlantHelper from "./components/plantComponentHelper";
import userProfile from "./components/userProfile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/adduser" component={Registration} />
        <Route path="/addplant" component={Plant} />
        <Route path="/user" component={userProfile} />
      </Switch>
    </div>
  );
}

export default App;
