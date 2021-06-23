import React, { useState } from "react";
import { editUser } from "../actions/userActions";

const UserEditForm = (props) => {
  const { user } = props;

  const [editPassWord, setEditPassWord] = useState();
  const [editPhone, setEditPhone] = useState();

  const handlePassWordEdit = (e) => {
    e.preventDefault;
    setEditPassWord(true);
  };

  const handlePhoneNumberEdit = (e) => {
    e.preventDefault;
    setEditPhone(true);
  };

  return (
    <div>
      <header>
        <h2>Water My Plants</h2>
        <h4>{user.name}</h4>
      </header>

      <h4>Profile Settings</h4>
      <form>
        <label>
          Password: {user.password}
          {editPassWord ? <input /> : <p onClick={handlePassWordEdit}>edit</p>}
        </label>
        <label>
          Phone number: {user.phonenumber}
          {editPhone ? <input /> : <p onClick={handlePhoneNumberEdit}>edit</p>}
        </label>
      </form>
    </div>
  );
};

export default UserEditForm;
