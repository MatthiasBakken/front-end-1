import "./App.css";
import React from "react";
import Login from "./components/Login";
import Plant from "./components/plantComponent";
import Registration from "./components/Registration";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import PlantList from "./components/PlantList";
import userProfile from "./components/userProfile";
import plantEditForm from "./components/plantEditForm";
import UserEditForm from "./components/UserEditForm";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Switch>
        <Route exact path="/adduser" component={Registration} />
        <PrivateRoute exact path="/addplant" component={Plant} />
        <PrivateRoute exact path="/user" component={userProfile} />
        <PrivateRoute exact path="/plantlist" component={PlantList} />
        <PrivateRoute exact path="/editplant" component={plantEditForm} />
        <PrivateRoute exact path="/edituser" component={UserEditForm} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
