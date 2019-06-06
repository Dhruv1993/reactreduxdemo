import { combineReducers } from "redux";
import testReducer from "../reduxStateTest/testReducer";

const rootReducer = combineReducers({
  test: testReducer
});

export default rootReducer;
