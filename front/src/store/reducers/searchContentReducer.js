import { CONTENT } from "../constant";
import { PARAM } from '../constant'
const initalState = {
  content:[],
  param:""
}

export default (state = initalState, { type, payload }) => {
  switch (type) {
    case CONTENT:
      return { ...state, content: payload}
    case PARAM:
      return { ...state, param: payload}
    default:
      return state
  }
}
