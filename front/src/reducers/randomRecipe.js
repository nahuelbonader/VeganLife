import { RANDOM_RECIPE } from "../constant";

const initialState = {
  randomRecipe: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RANDOM_RECIPE:
      return Object.assign({}, state, { randomRecipe: action.randomRecipe });
    default:
      return state;
  }
};