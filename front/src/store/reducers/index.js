import { combineReducers } from "redux";
import recipesReducer from "./recipesReducer";
import categoriesReducer from "./categoriesReducer";
import usersReducer from "./usersReducer";
import bottomRouteReducer from "./bottomRouteReducer";
import storesReducer from "./storesReducer";
import searchReducer from "./searchReducer";
import favouritesReducer from "./favouritesReducer";
import productsReducer from './productsReducer'

export default combineReducers({
  recipesReducer,
  categoriesReducer,
  usersReducer,
  bottomRouteReducer,
  storesReducer,
  searchReducer,
  favouritesReducer,
  productsReducer,
});
