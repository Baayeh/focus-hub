import AlarmBox from "../components/AlarmBox";
import { BsPlusCircleDotted } from "react-icons/bs";

const Alarm = () => {
  return (
    <section id="alarmComponent" className="">
      <AlarmBox />
      <AlarmBox />
      <AlarmBox />
      <AlarmBox />

      <div className="add-button-container">
        <button type="button" className="">
          <BsPlusCircleDotted />
        </button>
      </div>
    </section>
  );
};
export default Alarm;
