import React, { useState, useContext, useEffect } from "react";
import Calender from "react-calendar";
import { Datacontext } from "../context/DataContext";
function DatePicker() {
  const { datePicker } = useContext(Datacontext);
  const [selected, setSelected] = useState(new Date());

  const getNextDays = (count = 30) => {
    let days = [];
    let today = new Date();
    for (let i = 0; i < count; i++) {
      const day = new Date();
      day.setDate(today.getDate() + i);
      days.push(day);
    }
    return days;
  };

  useEffect(() => {
    datePicker(selected);
  }, [selected]);

  let days = getNextDays(30);

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="hidden sm:block">
        <div className=" max-w-md mx-auto p-4 shadow rounded-lg">
          <Calender
            onChange={setSelected}
            value={selected}
            minDate={new Date()}
          />
        </div>
      </div>
      <div className="sm:hidden">
        <div className="overflow-x-auto whitespace-nowrap border rounded-lg bg-white shadow p-2">
          {days.map((day, index) => (
            <button
              key={index}
              onClick={() => setSelected(day)}
              className={`inline-block text-center px-4 py-2 mx-1 rounded-lg min-w-[64px] transition
              ${
                day.toLocaleDateString("en-us", { weekday: "short" }) === "Sun"
                  ? "bg-gray-300"
                  : selected.toDateString() === day.toDateString()
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-blue-200"
              }
            `}
            >
              <div className="text-lg font-bold ">
                {day.toLocaleDateString("en-us", { weekday: "short" })}
              </div>
              <div className="text-sm font-semibold">{day.getDate()}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DatePicker;
