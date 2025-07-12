import React from "react";
import DatePicker from "./DatePicker";
import Shedule from "./Shedule";

function CalenderPanel() {
  return (
    <div className="flex flex-col md:flex-row gap-2 ">
      <div className="w-full md:w-[30%] h-64  p-4">
        <DatePicker />
      </div>
      <div className="w-full md:w-[70%] p-4">
        <Shedule />
      </div>
    </div>
  );
}

export default CalenderPanel;
