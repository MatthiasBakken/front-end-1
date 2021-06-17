import axiosWithAuth from "../utils/axiosWithAuth";

export const LOADING_USER = "LOADING_USER";
export const USER_SUCCESS = "USER_SUCCESS";
export const USER_FAIL = "USER_FAIL";
export const EDIT_USER = "EDIT_USER";
export const ADD_USER = "ADD_USER";

export const getUser = () => (dispatch) => {
  dispatch({ type: LOADING_USER });

  axiosWithAuth()
    .get("/user:id")
    .then((res) => {
      dispatch({ type: USER_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: USER_FAIL, payload: { err } });
    });
};

export const editUser = (user) => (dispatch) => {
  axiosWithAuth()
    .put("/users/id", USER)
    .then((res) => {
      dispatch({ type: EDIT_USER, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: USER_FAIL, payload: { err } });
    });
};

export const addUser = (user) => (dispatch) => {
  axiosWithAuth() //shouldn't need auth
    .post("/user/add", user)
    .then((res) => {
      dispatch({ type: ADD_USER, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: USER_FAIL, payload: { err } });
    });
};
