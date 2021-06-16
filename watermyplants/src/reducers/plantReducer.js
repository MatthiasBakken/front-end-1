export const initialState = {
  plant: {
    id: "",
    nickname: "",
    species: "",
    h2oFrequency: "",
    image: "",
  },
  editing: false,
};

export const plantReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
