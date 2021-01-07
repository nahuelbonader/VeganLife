import { IM_IN } from "../constant";
import { ROUTE_PARAM } from "../constant";
import { SHOW_IT } from "../constant";

const initialState = {
  route: 0,
  showSearchBar: true,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case IM_IN:
      return { ...state, route: payload };
    default:
      return state;
  }
};
