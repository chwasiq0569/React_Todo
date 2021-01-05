import React from "react";

const CompHeader = () => {
  return (
    <div className="outerWrapper">
      <div className="header">
        <div className="datePicker">January 2021</div>
        <div className="buttons">
          <div className="arrowBtns">
            <div className="leftArrow">{"<"}</div>
            <div className="rightArrow">{">"}</div>
          </div>
          <div className="todayBtn_Container">
            <button className="todayBtn">Today</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompHeader;
