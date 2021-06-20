import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getUser } from "../actions/userActions";

const userProfileComp = (props) => {
  const { user } = props;

  const getUser = props.getUser;

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <div className="profileContainer">
      <h2>User Profile</h2>
      {
        <div>
          <a>User name</a>
          <a>{user.username}</a>
          <a>Password</a>
          <a>{user.password}</a>
          <a>Phone number</a>
          <a>{user.phoneNumber}</a>
        </div>
      }
      <button>complete</button>
      <button>cancel</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps, { getUser })(userProfileComp);
