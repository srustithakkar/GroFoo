import { combineReducers } from "redux";
import ItemsReducer from "./item.reducer";

const rootReducer = combineReducers({
  ItemsReducer,
});

export default rootReducer;
