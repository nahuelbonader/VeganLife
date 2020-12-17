import { SET_PRODUCTS, ADD_PRODUCT } from "../constant";

const initialState = {
  products: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, products: payload };
    case ADD_PRODUCT:
      return { ...state, products: [...state.products, payload] };
    default:
      return state;
  }
};
