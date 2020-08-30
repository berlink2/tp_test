const initialState = {
  users: [],
};

export const GET_USERS = "GET_USERS";

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};
