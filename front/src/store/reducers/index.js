import { combineReducers } from "redux";
import recipesReducer from "./recipesReducer";
import categoriesReducer from "./categoriesReducer";
import usersReducer from "./usersReducer"


export default combineReducers({
  recipesReducer,
  categoriesReducer,
  usersReducer
});
