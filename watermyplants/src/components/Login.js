import React, { useState } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

import { useHistory } from "react-router";


const LOGIN = "login__";

const Login = () => {
  const { push } = useHistory();

  const [ form, setForm ] = useState( {
    username: "",
    password: "",
  } );

  const handleChange = ( e ) => {
    setForm( {
      ...form,
      [ e.target.name ]: e.target.value,
    } );
  };

  const handleSignupButton = ( e ) => {
    e.preventDefault();
    push( "/register" );
  };

  return (
    <div className={`${LOGIN}container`}>
      <form className={`${LOGIN}form`} onSubmit={( e ) => {
        e.preventDefault();
        axiosWithAuth()
          .post( "/auth/login", form )
          .then( ( res ) => {
            localStorage.setItem( "token", res.data.token );
            const user_id = parseInt( res.data.message.match( /(\d+)$/ )[ 0 ], 10 );
            localStorage.setItem( "user_id", user_id );
            window.location.href = "/plantlist";
          } )
          .catch( ( err ) => {
            console.log( err );
          } );
      }}>
        <div className={`${LOGIN}labels-inputs-container`}>
          <span className={`${LOGIN}input-sections`}>
            <label>Username</label>
            <input
              name="username"
              value={form.username}
              onChange={handleChange}
            />
          </span>
          <span className={`${LOGIN}input-sections`}>
            <label>Password</label>
            <input
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </span>
        </div>
        <button type="submit">Login</button>
      </form>
        <p className={`${LOGIN}no-account`}>Don't have an account?
          <button onClick={handleSignupButton}>Sign Up</button>
        </p>
    </div>
  );
};

export default Login;
