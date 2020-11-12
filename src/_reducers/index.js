import { combineReducers } from "redux";
import user from "./user_reducer";
import journey from "./journey_reducer";

const rootReducer = combineReducers({
  user,
  journey
});

export default rootReducer;
