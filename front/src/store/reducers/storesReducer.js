import { SET_STORES, ADD_STORE, EDIT_STORE } from "../constant";

const initialState = {
  stores: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_STORES:
      return Object.assign({}, state, { stores: action.payload });
    case ADD_STORE:
      return { ...state, stores: [...state.stores, action.payload] };
    case EDIT_STORE:
      const stores = state.stores.map((s) =>
        s._id == action.payload._id ? action.payload : s
      );
      return { ...state, stores };
    default:
      return state;
  }
};
