import { SET_USER, SET_USERS } from "../constant";

const initialState = {
  users: [],
  user: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, { user: action.payload });
    case SET_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};
