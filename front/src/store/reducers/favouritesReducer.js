import {
  SET_FAVS_RECIPES,
  SET_FAVS_PRODUCTS,
  SET_FAVS_STORES,
} from "../constant";

const initialState = {
  recipes: [],
  products: [],
  stores: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FAVS_RECIPES:
      return { ...state, recipes: payload };
    case SET_FAVS_PRODUCTS:
      return { ...state, products: payload };
    case SET_FAVS_STORES:
      return { ...state, stores: payload };
    default:
      return state;
  }
};
