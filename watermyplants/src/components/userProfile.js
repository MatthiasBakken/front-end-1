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
          <p>User name</p>
          <a>{user.username}</a>
          <p>Phone number</p>
          <a>{user.phonenumber}</a>
        </div>
      }
      <button>complete</button>
      <button>cancel</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  const user_id = Number(localStorage.getItem("user_id"));

  const userInfo = state.user.user;

  return {
    user: userInfo,
  };
};

export default connect(mapStateToProps, { getUser })(userProfileComp);
