import { AiOutlineEdit } from "react-icons/ai";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

const FocusProgress = () => {
  return (
    <section id="focus-progress">
      <div className="progress-header flex items-center justify-between">
        <h6 className="text-sm font-bold">Daily Progress</h6>

        <button type="button" className="p-2">
          <AiOutlineEdit></AiOutlineEdit>
        </button>
      </div>

      <div className="progress-content flex items-center justify-center mt-3">
        <div className="previousProgressInfo w-[25%] flex flex-col items-center justify-center">
          <span className="block text-sm">Yesterday</span>
          <h2 className="font-extrabold text-3xl">0</h2>
          <span className="block text-xs">Minutes</span>
        </div>

        <div className="currentProgressInfo w-[50%] lg:w-[40%] mx-auto">
          <CircularProgressbarWithChildren
            value={90}
            styles={buildStyles({
              // Rotation of path and trail, in number of turns (0-1)
              rotation: 0.0,

              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 0.5,

              // Can specify path transition in more detail, or remove it entirely
              // pathTransition: 'none',

              // Colors
              pathColor: `#dd1818`,
              textColor: "#f88",
              trailColor: "#d6d6d6",
              backgroundColor: "#3e98c7",
            })}
          >
            <span className="block text-xs lg:text-sm">Daily goal</span>
            <h2 className="font-extrabold text-3xl lg:text-4xl my-1">30</h2>
            <span className="block text-xs">Minutes</span>
          </CircularProgressbarWithChildren>
        </div>

        <div className="progressStreakInfo w-[25%] flex flex-col items-center justify-center">
          <span className="block text-sm">Streak</span>
          <h2 className="font-extrabold text-3xl">0</h2>
          <span className="block text-xs">days</span>
        </div>
      </div>

      <span className="block text-center text-sm mt-3 font-bold">
        Completed: 1 hour, 2 minutes
      </span>
    </section>
  );
};

export default FocusProgress;
