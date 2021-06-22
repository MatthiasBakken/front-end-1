import {
  LOADING_USER,
  USER_SUCCESS,
  USER_FAIL,
  EDIT_USER,
  ADD_USER,
} from "../actions/userActions";

export const initialState = {
  user: {
    username: "",
    password: "",
    phonenumber: "",
  },
  editing: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_USER: {
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    }
    case USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    }

    case USER_FAIL: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }

    case ADD_USER: {
      return {
        ...state,
        isLoading: false,
        error: "",
      };
    }
    case EDIT_USER: {
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    }

    default:
      return state;
  }
};
