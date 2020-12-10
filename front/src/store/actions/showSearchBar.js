import { SHOW_IT } from "../constant";

const setSearchBar = (boolean) => {
  return {
    type: SHOW_IT,
    payload: boolean
  }
}
export default setSearchBar
