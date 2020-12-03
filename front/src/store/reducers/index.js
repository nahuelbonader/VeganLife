import { combineReducers } from "redux";
import recipesReducer from "./recipesReducer";
import categoriesReducer from "./categoriesReducer";
import usersReducer from "./usersReducer"
import bottomRouteReducer from './bottomRouteReducer'
import searchContentReducer from './searchContentReducer'
import storesReducer from "./storesReducer"
export default combineReducers({
  recipesReducer,
  categoriesReducer,
  usersReducer,
  bottomRouteReducer,
  searchContentReducer,
  storesReducer
});
