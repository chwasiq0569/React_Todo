import { SELECT_DATE } from "./SelectDateTypes";

const selectDate = (selectedDate) => {
  return {
    type: SELECT_DATE,
    payload: selectedDate,
  };
};
export default selectDate;
