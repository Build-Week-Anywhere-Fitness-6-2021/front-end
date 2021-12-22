import { combineReducers } from "redux";
import instructorReducer from "./InstructorReducer";

const rootReducer = combineReducers({
  instructorReducer,
});

export default rootReducer;
