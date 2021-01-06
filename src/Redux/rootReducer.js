import { combineReducers } from "redux";
import selectCalendarReducer from "./SelectCalendar/SelectCalendarReducer";
import selectDateReducer from "./SelectDate/selectDateReducer";

const rootReducer = combineReducers({
  selectCalendarReducer: selectCalendarReducer,
  selectDateReducer: selectDateReducer,
});

export default rootReducer;
