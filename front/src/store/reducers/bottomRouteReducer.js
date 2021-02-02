import { IM_IN } from "../constant";

const initialState = {
  route: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case IM_IN:
      return { ...state, route: payload };
    default:
      return state;
  }
};
