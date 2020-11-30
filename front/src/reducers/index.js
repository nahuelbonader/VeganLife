import { combineReducers } from "redux";
import { useSelector, useDispatch } from "react-redux";
import randomRecipe from './randomRecipe'
import loginUser from './users'

export default combineReducers({
    randomRecipe,
    loginUser
  });
  