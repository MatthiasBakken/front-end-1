import React from 'react';

import { Link } from 'react-router-dom';

import '../styles/HomePage.css';


const HOME = "home-page__";

const HomePage = () => {

  return (
    <div className={`${HOME}container`}>
      <div className={`${HOME}content`}>
        <Link to="/register" >
          <p className={`${HOME}buttons`}>Sign Up</p>
        </Link>
        <Link to="/login" >
          <p className={`${HOME}buttons`}>Login</p>
        </Link>
      </div>
    </div>
  )
}

export default HomePage;