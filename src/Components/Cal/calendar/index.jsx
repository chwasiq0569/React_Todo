import React, { useState, useEffect } from "react";
import moment from "moment";
import Header from "./header";
import "./style.scss";
import {connect} from 'react-redux';
import selectCalendar from './../../../Redux/SelectCalendar/SelectCalendarAction';

function Calendar(props){
  const { value, onChange } = props;
  // const [calendar, setCalendar] = useState([]);
 
  useEffect(() => {
    // setCalendar(buildCalendar(value));
    // console.log("props.selectedCalendar: ", props.selectedCalendar.selectCalendarReducer.selectedCalendar);
    props.selectCalendar(buildCalendar(value));
  }, [value]);

  function buildCalendar(date) {
    const a = [];

    const startDay = date.clone().startOf("month").startOf("week");
    const endDay = date.clone().endOf("month").endOf("week");

    const _date = startDay.clone().subtract(1, "day");

    while (_date.isBefore(endDay, "day")) {
      a.push(
        Array(7)
          .fill(0)
          .map(() => _date.add(1, "day").clone())
      );
    }
    return a;
  }
  function isSelected(day) {
    return value.isSame(day, "day");
  }
  function beforeToday(day) {
    return moment(day).isBefore(new Date(), "day");
  }
  function isToday(day) {
    return moment(new Date()).isSame(day, "day");
  }
  function dayStyles(day) {
    if (beforeToday(day)) return "before";
    if (isSelected(day)) return "selected";
    if (isToday(day)) return "today";
    return "";
  }
  function currMonthName() {
    return value.format("MMMM");
  }
  function currYear() {
    return value.format("YYYY");
  }
  return (
    <div className="calendar">
      <Header value={value} onChange={onChange} />
      <div className="body">
        <div className="day-names">
          {["s", "m", "t", "w", "t", "f", "s"].map((d) => (
            <div className="week">{d}</div>
          ))}
        </div>
        {props.selectedCalendar.selectCalendarReducer.selectedCalendar.map((week, wi) => (
          <div key={wi}>
            {week.map((day, di) => (
              <div
                key={di}
                className="day"
                onClick={() => {
                  if (day < moment(new Date()).startOf("day")) return;
                  onChange(day);
                }}
              >
                <div className={dayStyles(day)}>
                  {day.format("D").toString()}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return {       
    selectedCalendar: state
  }
}
const mapDispatchToProps = dispatch => {
  return {
    selectCalendar: (el) => dispatch(selectCalendar(el))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Calendar);