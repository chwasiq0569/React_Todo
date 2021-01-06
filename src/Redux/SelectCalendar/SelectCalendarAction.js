import { SELECT_CALENDAR } from "./SelectCalendarTypes";

const selectCalendar = (selectedCalendar) => {
  return {
    type: SELECT_CALENDAR,
    payload: selectedCalendar,
  };
};
export default selectCalendar;
