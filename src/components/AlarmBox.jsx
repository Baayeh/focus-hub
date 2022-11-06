import React, { useState } from "react";
import { HiOutlineBell } from "react-icons/hi";
import { BsTrash } from "react-icons/bs";
import { InputSwitch } from "primereact/inputswitch";
import DaysBubble from "./DaysBubble";

const AlarmBox = ({ selectAlarm, editMode }) => {
  const [checked, setChecked] = useState(false);
  const days = ["Su", "M", "Tu", "We", "Th", "Fri", "Sa"];

  return (
    <div className="alarm-box relative">
      {editMode ? (
        <button type="button" className="p-1 absolute right-5 top-5">
          <BsTrash className="text-red-500"></BsTrash>
        </button>
      ) : (
        <InputSwitch
          checked={checked}
          onChange={(e) => setChecked(e.value)}
          className="absolute right-3 top-5"
        />
      )}

      <div onClick={() => selectAlarm({ name: "alarm1", time: "01:01:01" })}>
        <div className="flex items-center justify-between">
          <div className="flex items-end">
            <h1 className="text-4xl font-extrabold font-Comfortaa mb-0">
              8:30
            </h1>
            <span className="block font-bold text-sm">AM</span>
          </div>
        </div>

        <span className="mt-2 italic flex items-center">
          <HiOutlineBell />
          <span className="text-sm ml-2">in 11 hours, 36 minutes</span>
        </span>

        <h6 className="text-md mb-2 font-extrabold">Work</h6>

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
    </div>
  );
};

export default AlarmBox;
