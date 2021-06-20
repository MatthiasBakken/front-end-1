import {
  LOADING_PLANTS,
  PLANT_SUCCESS,
  PLANT_FAIL,
  EDIT_PLANT,
  ADD_PLANT,
  DELETE_PLANT,
} from "../actions/plantActions";

export const initialState = {
  plants: [],
  editing: false,
  isFetching: false,
};
// plants structure
// plant: {
//     id: "",
//     nickname: "",
//     species: "",
//     h2oFrequency: "",
//     image: "",
//   }

export const plantReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_PLANTS: {
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    }

    case PLANT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        plants: [...action.payload],
      };
    }

    case PLANT_FAIL: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }

    case ADD_PLANT: {
      return {
        ...state,
        isLoading: false,
        plants: action.payload,
      };
    }

    case EDIT_PLANT: {
      return {
        ...state,
        isLoading: false,
        plants: action.payload,
      };
    }

    case DELETE_PLANT: {
      return {
        ...state,
        isLoading: false,
        plants: action.payload,
      };
    }

    default:
      return state;
  }
};
