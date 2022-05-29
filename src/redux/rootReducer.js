import { combineReducers } from "redux";
import cartReducer from "./CartSlice";

const rootReducer = combineReducers({
  cart: cartReducer
});

export default rootReducer;
