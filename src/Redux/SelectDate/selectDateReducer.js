import { SELECT_DATE } from "./SelectDateTypes";
import moment from "moment";

const initialSelectDate = {
  selectedDate: moment(),
};
const selectDateReducer = (state = initialSelectDate, action) => {
  switch (action.type) {
    case SELECT_DATE:
      return {
        ...state,
        selectedDate: action.payload,
      };
    default:
      return state;
  }
};

export default selectDateReducer;
