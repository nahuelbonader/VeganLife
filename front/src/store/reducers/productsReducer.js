import {
  SET_PRODUCTS,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
} from "../constant";

const initialState = {
  products: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, products: payload };
    case ADD_PRODUCT:
      return { ...state, products: [...state.products, payload] };
    case EDIT_PRODUCT:
      const products = state.products.map((p) =>
        p._id == payload._id ? payload : p
      );
      return { ...state, products };
    case DELETE_PRODUCT:
      const filteredProducts = state.products.filter(
        (p) => p._id !== payload._id
      );
      return { ...state, products: filteredProducts };
    default:
      return state;
  }
};
