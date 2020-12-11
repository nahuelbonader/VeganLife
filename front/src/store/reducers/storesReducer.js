import { SET_STORES, ADD_STORE } from "../constant";

const initialState = {
  stores: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_STORES:
      return Object.assign({}, state, { stores: action.payload });
    case ADD_STORE:
      return { ...state, stores: [...state.stores, action.payload] };
    default:
      return state;
  }
};
