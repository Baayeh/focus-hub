import React, { useState } from "react";
import { HiOutlineBell } from "react-icons/hi";
import { InputSwitch } from "primereact/inputswitch";
import DaysBubble from "./DaysBubble";

const AlarmBox = () => {
  const [checked, setChecked] = useState(false);
  const days = ["Su", "M", "Tu", "We", "Th", "Fri", "Sa"];

  return (
    <div className="alarm-box">
      <div className="flex items-center justify-between">
        <h6 className="text-md mb-2 font-extrabold">Work</h6>

        <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
      </div>
      <div className="flex items-end">
        <h1 className="text-4xl mb-0">8:30</h1>
        <span className="block font-bold text-sm">AM</span>
      </div>
      <span className="mt-2 italic flex items-center">
        <HiOutlineBell />
        <span className="text-sm ml-2">in 11 hours, 36 minutes</span>
      </span>
      <div className="flex items-center justify-between lg:justify-start mt-3">
        {days.map((day) => {
          return (
            <React.Fragment key={day}>
              <DaysBubble day={day} />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default AlarmBox;
