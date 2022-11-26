export const initialState = {
  experience: [],
  pageInfo: null,
  projects: [],
  skills: [],
  socials: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ALL":
      return action.payload;

    default:
      return state;
  }
};

export default reducer;
