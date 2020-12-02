import { CONTENT } from "../constant";

const setContent = (content) => {
  return{
    type:CONTENT,
    payload: content
  }
}
export default setContent
