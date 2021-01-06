import { SELECT_CALENDAR } from "./SelectCalendarTypes";
import buildCalendar from "../../Components/Cal/calendar/build";
import moment from "moment";

const initialSelectCalendarState = {
  selectedCalendar: buildCalendar(moment()),
};
const selectCalendarReducer = (state = initialSelectCalendarState, action) => {
  switch (action.type) {
    case SELECT_CALENDAR:
      return {
        ...state,
        selectedCalendar: action.payload,
      };
    default:
      return state;
  }
};

export default selectCalendarReducer;
