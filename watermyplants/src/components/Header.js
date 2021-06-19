import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  return (
    <div>
      <h1>Water My Plants</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="" onClick={logout}>
          Logout
        </Link>
      </nav>
    </div>
  );
};
export default Header;
