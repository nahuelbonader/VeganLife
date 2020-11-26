import { combineReducers } from "redux";
import { useSelector, useDispatch } from "react-redux";
import randomRecipe from './randomRecipe'

export default combineReducers({
    randomRecipe,
  });
  