import { combineReducers } from "redux";
import recipesReducer from "./recipesReducer";
import categoriesReducer from "./categoriesReducer";

export default combineReducers({
  recipesReducer,
  categoriesReducer,
});
