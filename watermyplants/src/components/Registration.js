import React, { useState } from "react";

import { connect } from "react-redux";
import { addUser } from "../actions/userActions";
import { useHistory } from "react-router-dom";


const Registration = (props) => {
  const [state, setState] = useState({
    username: "",
    password: "",
    phonenumber: "",
  });

  const { push } = useHistory();

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const addUser = props.addUser;

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(state);
    push("/login");
  };

  return (
    <div>
      <p>
        <strong>Welcome to Water My Plants!</strong>
        <br />
        <i>Create your account here!</i>
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            name="username"
            value={state.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone Number:
          <input
            name="phonenumber"
            value={state.phonenumber}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            name="password"
            value={state.password}
            onChange={handleChange}
          />
        </label>
        <button>Complete</button>
      </form>
    </div>
  );
};

export default connect(null, { addUser })(Registration);
