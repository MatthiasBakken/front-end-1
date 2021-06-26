import React, { useState } from "react";
import { editUser } from "../actions/userActions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import '../styles/UserEditForm.css';


const USER = "user-edit__";

const UserEditForm = ( props ) => {

  const [ user, setUser ] = useState( props.user );

  const { push } = useHistory();

  const [ editPhone, setEditPhone ] = useState();

  const handlePhoneNumberEdit = () => {
    setEditPhone( true );
  };

  const handleChange = ( e ) => {
    setUser( {
      ...user,
      [ e.target.name ]: e.target.value,
    } );
  };

  const handleSubmit = ( e ) => {
    e.preventDefault();
    props.editUser( user );
    push( "/user" );
  };

  return (
    <div className={`${USER}container`}>
      <h4>{user.username}'s Profile Settings</h4>
      <form onSubmit={handleSubmit}>
        <label>Phone number:</label>
        <p>{user.phonenumber}</p>
          {editPhone ? (
            <input
              name="phonenumber"
              value={user.phonenumber}
              onChange={handleChange}
            />
          ) : (
            <button onClick={handlePhoneNumberEdit}>EDIT</button>
          )}
        
        <button>SUBMIT</button>
      </form>
    </div>
  );
};

const mapStateToProps = ( state ) => {
  const userInfo = state.user.user;
  return {
    user: userInfo,
  };
};

export default connect(mapStateToProps, { editUser })(UserEditForm);
