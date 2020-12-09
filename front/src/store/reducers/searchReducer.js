import { SEARCH, PRESSED } from "../constant";

const initialState = {
  search: "",
  pressed: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return { ...state, search: action.payload };
    case PRESSED:
      return { ...state, pressed: action.payload };
    default:
      return state;
  }
};
