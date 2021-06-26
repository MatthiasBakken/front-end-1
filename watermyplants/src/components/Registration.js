import React, { useState } from "react";

import { connect } from "react-redux";
import { addUser } from "../actions/userActions";
import { useHistory } from "react-router-dom";

import '../styles/Registration.css';


const SIGN = "signup__";

const Registration = ( props ) => {
  const [ state, setState ] = useState( {
    username: "",
    password: "",
    phonenumber: "",
  } );

  const { push } = useHistory();

  const handleChange = ( e ) => {
    setState( {
      ...state,
      [ e.target.name ]: e.target.value,
    } );
  };

  const addUser = props.addUser;

  const handleSubmit = ( e ) => {
    e.preventDefault();
    addUser( state );
    push( "/login" );
  };

  return (
    <div className={`${SIGN}container`}>
      <span className={`${SIGN}upper-content`}>
        <p><strong>Welcome to Water My Plants!</strong></p>
        <p><i>Create your account here!</i></p>
      </span>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          name="username"
          value={state.username}
          onChange={handleChange}
        />
        <label>Phone Number:</label>
        <input
          name="phonenumber"
          value={state.phonenumber}
          onChange={handleChange}
        />
        <label>Password:</label>
        <input
          name="password"
          value={state.password}
          onChange={handleChange}
        />
        <button>Complete</button>
      </form>
    </div>
  );
};

export default connect(null, { addUser })(Registration);
