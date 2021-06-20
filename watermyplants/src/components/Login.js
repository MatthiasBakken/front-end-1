import React, { useState } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

import { useHistory } from "react-router";

const Login = () => {
  const { push } = useHistory();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/auth/login", form)
      .then((res) => {
        // console.log(res.data);
        localStorage.setItem("token", res.data.token);
        push("/plantlist");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSignupButton = (e) => {
    e.preventDefault();
    push("/adduser");
  };

  return (
    <div>
      <h1>Water My Plants</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Login</button>
        <button onClick={handleSignupButton}>Sign Up</button>
      </form>
    </div>
  );
};
export default Login;
