import { axiosWithAuth } from "../utils/axiosWithAuth";

export const LOADING_PLANTS = "LOADING_PLANTS";
export const PLANT_SUCCESS = "PLANT_SUCCESS";
export const PLANT_FAIL = "PLANT_FAIL";
export const EDIT_PLANT = "EDIT_PLANT";
export const ADD_PLANT = "ADD_PLANT";
export const DELETE_PLANT = "DELETE_PLANT";

export const getPlants = () => (dispatch) => {
  dispatch({ type: LOADING_PLANTS });

  axiosWithAuth()
    .get("/plants")
    .then((res) => {
      dispatch({ type: PLANT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: PLANT_FAIL, payload: { err } });
    });
};

export const editPlant = (plant) => (dispatch) => {
  axiosWithAuth()
    .put("/plants/id", plant)
    .then((res) => {
      dispatch({ type: EDIT_PLANT, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: PLANT_FAIL, payload: { err } });
    });
};

export const addPlant = (plant) => (dispatch) => {
  axiosWithAuth()
    .post("/plants/add", plant)
    .then((res) => {
      dispatch({ type: ADD_PLANT, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: PLANT_FAIL, payload: { err } });
    });
};

export const deletePlant = (plant) => (dispatch) => {
  axiosWithAuth()
    .delete(`/plants/${plant.id}`)
    .then((res) => {
      dispatch({ type: DELETE_PLANT, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: PLANT_FAIL, payload: { err } });
    });
};
