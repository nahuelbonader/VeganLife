import { combineReducers } from "redux";
import recipesReducer from "./recipesReducer";
import categoriesReducer from "./categoriesReducer";
import usersReducer from "./usersReducer";
import storesReducer from "./storesReducer"


export default combineReducers({
  recipesReducer,
  categoriesReducer,
  usersReducer,
  storesReducer
});
