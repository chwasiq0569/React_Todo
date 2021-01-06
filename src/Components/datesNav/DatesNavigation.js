import React, { useState } from "react";
import "./datesNavigation.scss";
import Moment from "react-moment";
import moment from "moment";
import { connect } from "react-redux";
import selectDate from "./../../Redux/SelectDate/SelectActions";
import selectCalendar from "./../../Redux/SelectCalendar/SelectCalendarAction";

const DatesNavigation = (props) => {
  const { date } = props;
  // const [date, setDate] = useState(moment());
  // console.log("props.selectedDate: ", props.selectedDate);
  console.log(props.state.selectCalendarReducer.selectedCalendar);
  const [days, setDays] = useState([
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
  ]);
  console.log(
    "props.state: ",
    props.state.selectDateReducer.selectedDate.date()
  );
  console.log("date: ", date.date());
  // console.log("date: ", date.day());
  // console.log("date: ", date.dayOfYear());
  // console.log("state:");
  // let val = date.dayOfYear(); //6
  let val = props.state.selectDateReducer.selectedDate.date();
  let day = props.state.selectDateReducer.selectedDate.day() - 1;
  // console.log("val: ", val);
  // console.log("day: ", day);
  // console.log("days[day]: ", days[day]); //3

  while (days[day] != "Mon") {
    val--;
    day--;
  }
  let dey = [];
  for (let l = val; l < val + 7; l++) {
    if (l <= moment().daysInMonth()) {
      dey.push(l);
    }
  }
  // console.log("dey: ", dey);
  // console.log("date: ", date.date());
  return (
    <div className="datesNav__outerWrapper">
      {/* {props.state.selectCalendarReducer.selectedCalendar.map((d, i) => {
        return d.map((c, j) => {
          return (
            <div className="date_Comp">
              <p className="day">{days[i]}</p>
              <p className="date">{c.date()}</p>
              <div className="today">
                <div className="circle"></div>
              </div>
            </div>
          );
        });
      })} */}
      {dey.map((d, i) => (
        <div className="date_Comp">
          <p className="day">{days[i]}</p>
          <p className="date">{d}</p>
          <div className="today">
            <div className="circle"></div>
          </div>
        </div>
      ))}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps)(DatesNavigation);
// export default DatesNavigation;
