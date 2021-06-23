import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const LOADING_USER = "LOADING_USER";
export const USER_SUCCESS = "USER_SUCCESS";
export const USER_FAIL = "USER_FAIL";
export const EDIT_USER = "EDIT_USER";
export const ADD_USER = "ADD_USER";

export const getUser = () => (dispatch) => {
  dispatch({ type: LOADING_USER });
  const user_id = Number(localStorage.getItem("user_id"));
  axiosWithAuth()
    .get(`/users/${user_id}`)
    .then((res) => {
      console.log("get user axios:");
      console.log(res);
      dispatch({ type: USER_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: USER_FAIL, payload: { err } });
    });
};

export const editUser = (user) => (dispatch) => {
  axiosWithAuth()
    .put(`/users/${user.user_id}`, user)
    .then((res) => {
      dispatch({ type: EDIT_USER, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: USER_FAIL, payload: { err } });
    });
};

export const addUser = (user) => (dispatch) => {
  axios
    .post("https://bewyp-pt.herokuapp.com/api/auth/register", user)
    .then((res) => {
      dispatch({ type: ADD_USER, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: USER_FAIL, payload: { err } });
    });
};
