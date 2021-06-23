import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getUser } from "../actions/userActions";

const userProfileComp = (props) => {
  const { user } = props;
  const { push } = useHistory();

  const getUser = props.getUser;

  useEffect(() => {
    getUser();
  }, [getUser]);

  const handleEdit = (e) => {
    e.preventDefault();

    push('/edituser')
  }

  return (
    <div className="profileContainer">
      <h2>User Profile</h2>
      {
        <div>
          <p>User name</p>
          <p>{user.username}</p>
          <p>Phone number</p>
          <p>{user.phonenumber}</p>
        </div>
      }
      <button>complete</button>
      <button>cancel</button>

      <button onClick={}>Edit</button>
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
