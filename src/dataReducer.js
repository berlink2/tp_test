const initialState = {
  users: [],
  members: [],
  suggestions: [],
};

export const GET_USERS = "GET_USERS";
export const GET_MEMBERS = "GET_MEMBERS";
export const GET_SUGGESTIONS = "GET_SUGGESTIONS";

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case GET_MEMBERS:
      return {
        ...state,
        members: action.payload,
      };
    case GET_SUGGESTIONS:
      return {
        ...state,
        suggestions: action.payload,
      };
    default:
      return state;
  }
};
