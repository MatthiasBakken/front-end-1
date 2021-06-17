export const initialState = {
  user: {
    username: "",
    plants: [],
    phoneNumber: "",
  },
  editing: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
