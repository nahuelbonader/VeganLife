import { IM_IN } from "../constant";

const setRoute = (index) => {
  return {
    type: IM_IN,
    payload: index
  }
}

export default setRoute
