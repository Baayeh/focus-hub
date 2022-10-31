import { HiOutlineBell } from "react-icons/hi";
import DaysBubble from "./DaysBubble";

const AlarmBox = () => {
  const days = ["Su", "M", "Tu", "We", "Th", "Fri", "Sa"];

  return (
    <div className="alarm-box bg-white rounded-xl shadow-white-shadow h-max p-5">
      <div className="flex items-center justify-between">
        <h6 className="text-md mb-2 font-extrabold">Work</h6>
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
          return <DaysBubble day={day} />;
        })}
      </div>
    </div>
  );
};

export default AlarmBox;
