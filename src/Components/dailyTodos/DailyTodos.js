import React, { useEffect } from "react";
import { GrDrag } from "react-icons/gr";
import { MdDone } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { CgCalendarToday } from "react-icons/cg";
import { BiMessage } from "react-icons/bi";
import { IoMenuOutline } from "react-icons/io5";
import {
  IoAddCircleOutline,
  IoAddCircleSharp,
  IoAddOutline,
} from "react-icons/io5";
import "./dailyTodos.scss";
import { connect } from "react-redux";
// import selectDateReducer from "./../../Redux/SelectDate/selectDateReducer";

const DailyTodos = (props) => {
  console.log(props.state.selectDateReducer.selectedDate.format("MMM Do YY"));
  console.log(props.state.selectCalendarReducer.selectedCalendar);
  return (
    <div className="dailyTodos__Wrapper">
      <div className="dailyTodo">
        {props.state.selectCalendarReducer.selectedCalendar.map((r) =>
          r.map((c) => (
            <>
              <div className="date">
                <span>{c.format("MMM Do YY")}</span>
              </div>
              <div className="todo">
                <div className="leftSide">
                  <div className="dragIcon">
                    <GrDrag color="#6d5f5e" />
                  </div>
                  <div className="taskCompletedIcon">
                    <MdDone color="#6d5f5e" />
                  </div>
                </div>
                <div className="middle">
                  <div>
                    rasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdj
                  </div>
                </div>
                <div className="rightSide">
                  <div className="editIcon">
                    <FiEdit3 color="#6d5f5e" />
                  </div>
                  <div className="scheduleIcon">
                    <CgCalendarToday color="#6d5f5e" />
                  </div>
                  <div className="commentIcon">
                    <BiMessage color="#6d5f5e" />
                  </div>
                  <div className="hamburgerIcon">
                    <IoMenuOutline color="#6d5f5e" />
                  </div>
                </div>
              </div>
            </>
          ))
        )}

        <div className="date">
          <span>Today - Tue 5 Jan</span>
        </div>
        <div className="todo">
          <div className="leftSide">
            <div className="dragIcon">
              <GrDrag color="#6d5f5e" />
            </div>
            <div className="taskCompletedIcon">
              <MdDone color="#6d5f5e" />
            </div>
          </div>
          <div className="middle">
            <div>
              rasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdj
            </div>
          </div>
          <div className="rightSide">
            <div className="editIcon">
              <FiEdit3 color="#6d5f5e" />
            </div>
            <div className="scheduleIcon">
              <CgCalendarToday color="#6d5f5e" />
            </div>
            <div className="commentIcon">
              <BiMessage color="#6d5f5e" />
            </div>
            <div className="hamburgerIcon">
              <IoMenuOutline color="#6d5f5e" />
            </div>
          </div>
        </div>
        {/* ---------------------------------------------- */}
        <div className="addTodoBtn">
          <div className="addTodoBtn__leftSide">
            <div className="addIcon">
              <IoAddOutline color="#ffffff" />
            </div>
            <div className="addIcon">
              <IoAddOutline color="#6d5f5e" />
            </div>
          </div>
          <div className="addTodoBtn__rightSide">
            <span>Add Task</span>
          </div>
        </div>
        {/* ---------------------------------------------- */}
        {/* <div className="addtodo">
          <div contenteditable="true" placeholder="Add Task..."></div>
          <div className="addtodo__Btns">
            <div className="btnsContainer">
              <button>Today</button>
              <button>Inbox</button>
            </div>
          </div>
        </div> */}
        {/* ----------------------------------------------------- */}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    state: state,
  };
};
export default connect(mapStateToProps)(DailyTodos);

// export default DailyTodos;
