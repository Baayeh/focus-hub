import { useState } from "react";
import AlarmBox from "../components/AlarmBox";
import AddAlarm from "../components/addAlarm";
import { BsPlusCircleDotted } from "react-icons/bs";

const Alarm = () => {
  const [displayDialog, setDisplayDialog] = useState(false);

  return (
    <section id="alarmComponent" className="">
      <AlarmBox />
      <AlarmBox />
      <AlarmBox />
      <AlarmBox />

      <div className="add-button-container">
        <button
          type="button"
          className=""
          onClick={() => setDisplayDialog(true)}
        >
          <BsPlusCircleDotted />
        </button>
      </div>

      <AddAlarm
        displayDialog={displayDialog}
        setDisplayDialog={setDisplayDialog}
      />
    </section>
  );
};
export default Alarm;
