import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUser } from "../actions/userActions";
import { useHistory } from "react-router-dom";

import '../styles/User.css';


const USER = 'user-info__';

const User = (props) => {
  const { user } = props;
  const { push } = useHistory();

  const getUser = props.getUser;

  useEffect(() => {
    getUser();
  }, [getUser]);

  const handleEdit = (e) => {
    e.preventDefault();

    push("/edituser");
  };

  return (
    <div className={`${USER}container`}>
      <h2>User Profile</h2>
      <div className={`${USER}content`}>
        <label>Username:</label>
        <p>{user.username}</p>
        <label>Phone Number:</label>
        <p>{user.phonenumber}</p>
      </div>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  const userInfo = state.user.user;

  return {
    user: userInfo,
  };
};

export default connect(mapStateToProps, { getUser })(User);
