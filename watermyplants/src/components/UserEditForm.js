import React, { useState } from "react";
import { editUser, USER_FAIL } from "../actions/userActions";

const UserEditForm = (props) => {
  const [user, setUser] = useState({
      username: "",
      password: "",
      phonenumber: "",
  });

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

  const handleChange = (e) => {
      setUser({
          ...user,
          [e.target.name]: e.target.value,
      })
  }

  return (
    <div>
      <header>
        <h2>Water My Plants</h2>
        <h4>{user.username}</h4>
      </header>

      <h4>Profile Settings</h4>
      <form>
        <label>
          Password: {user.password}
          {editPassWord ? <input name='password' value={user.password} onChange={handleChange} /> : <button onClick={handlePassWordEdit}>edit</button>}
        </label>
        <label>
          Phone number: {user.phonenumber}
          {editPhone ? <input name='phonenumber' value={user.phonenumber} onChange={handleChange} /> : <button onClick={handlePhoneNumberEdit}>edit</button>}
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UserEditForm;
