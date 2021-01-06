import React, { useState } from "react";
import moment from "moment";
import Calendar from "./calendar";

export default function Cal({selectedDate,
  setSelectedDate}) {
  return <Calendar value={selectedDate} onChange={setSelectedDate} />;
}
