import { combineReducers } from "redux";
import groupReducer from "./groupsReducer";
import productsReducer from "./productsReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  products: productsReducer,
  groups: groupReducer,
});

export default rootReducer;
