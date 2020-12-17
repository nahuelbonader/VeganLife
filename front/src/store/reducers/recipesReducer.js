import { SET_RECIPES, ADD_RECIPE } from "../constant";

const initialState = {
  recipes: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_RECIPES:
      return Object.assign({}, state, { recipes: payload });
    case ADD_RECIPE:
      return { ...state, recipes: [...state.recipes, payload] };
    default:
      return state;
  }
};
