import React, { useState } from "react";
import "./compHeader.scss";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdKeyboardArrowDown,
} from "react-icons/md";
// import Calendars from "./../calendar/Calendars";
import { connect } from "react-redux";
import DailyTodos from "../dailyTodos/DailyTodos";
import DatesNavigation from "../datesNav/DatesNavigation";
import Moment from "react-moment";
import moment from "moment";
import Cal from "../Cal/Cal";
import selectDate from "./../../Redux/SelectDate/SelectActions";
import selectCalendar from "./../../Redux/SelectCalendar/SelectCalendarAction";

const CompHeader = (props) => {
  const [hideCalender, SetHideCalender] = useState(true);
  const [date, setDate] = useState(moment());
  const [selectedDate, setSelectedDate] = useState(moment());

  // console.log("selectedDate: ", selectedDate.date());
  // props.selectDate(selectedDate);

  return (
    <>
      <div className="compHeader__outerWrapper">
        <div className="header">
          <div className="datePicker">
            <div className="date">January 2021</div>
            <div onClick={() => SetHideCalender(!hideCalender)}>
              <MdKeyboardArrowDown color="#a8a4a4" />
            </div>
            <div className={hideCalender ? "hide" : "calendarContainer"}>
              <Cal
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            </div>
          </div>
          <div className="buttons">
            <div className="arrowBtns">
              <button
                className="leftArrow"
                onClick={() => {
                  setDate(date.clone().subtract(7, "day"));
                  props.selectDate(
                    props.state.selectDateReducer.selectedDate
                      .clone()
                      .subtract(7, "day")
                  );
                }}
              >
                <MdKeyboardArrowLeft size="25" color="#a8a4a4" />
              </button>
              <button
                className="rightArrow"
                onClick={() => {
                  console.log(date.clone()._d);
                  setDate(date.clone().add(7, "day"));
                  props.selectDate(
                    props.state.selectDateReducer.selectedDate
                      .clone()
                      .add(7, "day")
                  );
                }}
              >
                <MdKeyboardArrowRight size="25" color="#a8a4a4" />
              </button>
            </div>
            <div className="todayBtn_Container">
              <button className="todayBtn">Today</button>
            </div>
          </div>
        </div>
      </div>
      {/* setSelectedDate={setSelectedDate} */}
      <DatesNavigation date={date} setSelectedDate={setSelectedDate} />
      <DailyTodos />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    state: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    selectCalendar: (el) => dispatch(selectCalendar(el)),
    selectDate: (el) => dispatch(selectDate(el)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CompHeader);
