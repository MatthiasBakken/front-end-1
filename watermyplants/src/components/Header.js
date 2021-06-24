import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import '../styles/Header.css';


const HEADER = "header__";

const Header = () => {
  
  const [ token, setToken ] = useState( localStorage.getItem( "token" ) );

  let nav = token ? "/plantlist" : "/";
  useEffect( () => {
    setToken(localStorage.getItem( "token" ));
  }, [ localStorage ] );

  const logout = () => {
    localStorage.removeItem( "token" );
    localStorage.removeItem( "user_id" );
    window.location.replace( "/" );
  };
  return (
    <div className={`${HEADER}container`}>
      <h1 className={`${HEADER}title`}>Water My Plants</h1>

      <nav className={`${HEADER}nav`}>
        <Link to={`${nav}`}>Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/" onClick={logout}>
          Logout
        </Link>
        {token ?
          <Link to="/plantlist">Plants</Link>
          :
          null
        }
        {token ?
          <Link to="/user">User</Link>
          :
          null
        }
      </nav>
    </div>
  );
};

export default Header;
