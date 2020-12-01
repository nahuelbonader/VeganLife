import { SET_RECIPES } from "../constant";

const initialState = {
  recipes: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_RECIPES:
      return Object.assign({}, state, { recipes: action.payload });
    default:
      return state;
  }
};
