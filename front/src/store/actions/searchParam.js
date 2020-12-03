import { PARAM } from "../constant";

const setParam = (param) => {
  return{
    type:PARAM,
    payload: param
  }
}

export default setParam
