import React, {useEffect} from "react";
import Login from "./components/Login";
import Plant from "./components/Plant";
import Registration from "./components/Registration";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import PlantList from "./components/PlantList";
import User from "./components/User";
import PlantEditForm from "./components/PlantEditForm";
import UserEditForm from "./components/UserEditForm";
import { PrivateRoute } from "./components/PrivateRoute";
import HomePage from "./components/HomePage";

import '../src/styles/App.css';

function App () {

  let token = localStorage.getItem( "token" );
  
  useEffect( () => {
    token = localStorage.getItem( "token" );
  }, [localStorage])
  return (
    <div className="App">
      <header className="App-header">
        <Header token={token} />
      </header>
      <Switch>
        <Route exact path="/" render={props =>
        {
          return !token ?
            <HomePage {...props} /> : <Redirect to="/plantlist" />;
        }
        } />
        <Route exact path="/register" component={Registration} />
        <PrivateRoute exact path="/addplant" component={Plant} />
        <PrivateRoute exact path="/user" component={User} />
        <PrivateRoute exact path="/plantlist" component={PlantList} />
        <PrivateRoute exact path="/editplant" component={PlantEditForm} />
        <PrivateRoute exact path="/edituser" component={UserEditForm} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
