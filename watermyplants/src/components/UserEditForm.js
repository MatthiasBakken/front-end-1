import React, { useState } from "react";
import { editUser } from "../actions/userActions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";


const UserEditForm = ( props ) => {

  const [ user, setUser ] = useState( props.user );
  
  const { push } = useHistory();

  const [ editPhone, setEditPhone ] = useState();


  const handlePhoneNumberEdit = ( e ) => {
    e.preventDefault;
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
    <div>
      <header>
        <h2>Water My Plants</h2>
        <h4>{user.username}</h4>
      </header>

      <h4>Profile Settings</h4>
      <form onSubmit={handleSubmit}>
        <label>
          Phone number: {user.phonenumber}
          {editPhone ? (
            <input
              name="phonenumber"
              value={user.phonenumber}
              onChange={handleChange}
            />
          ) : (
            <button onClick={handlePhoneNumberEdit}>edit</button>
          )}
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = ( state ) => {
  const user_id = Number( localStorage.getItem( "user_id" ) );

  const userInfo = state.user.user;

  return {
    user: userInfo,
  };
};

export default connect(mapStateToProps, { editUser })(UserEditForm);
