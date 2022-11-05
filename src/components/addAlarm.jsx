import { useState } from "react";
import { Dialog } from "primereact/dialog";
import { InputNumber } from "primereact/inputnumber";
import { InputSwitch } from "primereact/inputswitch";
import { ToggleButton } from "primereact/togglebutton";
import { FaAngleUp, FaAngleDown, FaTimes } from "react-icons/fa";
import { BsCheckAll } from "react-icons/bs";
import { Dropdown } from "primereact/dropdown";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { BiAlarmSnooze } from "react-icons/bi";

const snoozeTimeList = [
  { name: "Disabled", code: "none" },
  { name: "5 Minutes", code: "5min" },
  { name: "10 Minutes", code: "10min" },
  { name: "20 Minutes", code: "20min" },
  { name: "30 Minutes", code: "30min" },
];

const AddAlarm = ({ displayDialog, setDisplayDialog }) => {
  const [hour, setHour] = useState("12");
  const [minutes, setMinutes] = useState("0");
  const [meridian, setMeridian] = useState("AM");
  const [repeatAlarm, setRepeatAlarm] = useState(false);

  const increaseHour = () => {
    setHour((current) => (current === 12 ? 1 : current + 1));
  };

  const decreaseHour = () => {
    setHour((current) => (current === 1 ? 12 : current - 1));
  };

  const increaseMinutes = () => {
    setMinutes((current) => (current === 59 ? 0 : current + 1));
  };

  const decreaseMinutes = () => {
    setMinutes((current) => (current === 0 ? 59 : current - 1));
  };

  const renderFooter = () => {
    return (
      <div className="flex items-center justify-center mt-4 space-x-2">
        <button
          onClick={() => setDisplayDialog(false)}
          type="button"
          className="bg-secondaryColor text-white px-5 py-3 rounded-lg text-sm flex items-center"
        >
          <FaTimes className="text-lg"></FaTimes>
          <span className="d-block ml-1">Cancel</span>
        </button>

        <button
          type="button"
          className="bg-primaryColor text-white px-5 py-3 rounded-lg text-sm flex items-center"
        >
          <BsCheckAll className="text-lg"></BsCheckAll>
          <span className="d-block ml-1">Save</span>
        </button>
      </div>
    );
  };

  return (
    <section id="Add-Alarm">
      <Dialog
        header="Add New Alarm"
        visible={displayDialog}
        style={{ width: "50vw" }}
        footer={renderFooter}
        onHide={() => setDisplayDialog(false)}
        closable={false}
        closeOnEscape={true}
        dismissableMask={true}
        className="add-alarm-dialog"
      >
        <form action="" className="mt-2">
          <div className="form-group mb-3">
            <input
              type="text"
              placeholder="Set Alarm Name"
              className="form-control w-full border border-gray-300 p-4 h-[50px] border-l-0 border-r-0 border-t-0 focus:border focus:outline-none focus:ring-2 ring-offset-0 ring-primaryLightColor"
            />
          </div>

          <section className="flex items-center timer-container">
            <div className="text-center">
              <button
                type="button"
                className="hour-increase p-2 hover:bg-gray-300"
                onClick={increaseHour}
              >
                <FaAngleUp></FaAngleUp>
              </button>
              <InputNumber
                inputId="hour"
                value={hour}
                onValueChange={(e) => setHour(e.value)}
                max={12}
                min={1}
              />
              <button
                type="button"
                className="hour-decrease p-2 hover:bg-gray-300"
                onClick={decreaseHour}
              >
                <FaAngleDown></FaAngleDown>
              </button>
            </div>

            <span className="d-block time-divider">:</span>

            <div className="text-center">
              <button
                type="button"
                className="minute-increase p-2 hover:bg-gray-300"
                onClick={increaseMinutes}
              >
                <FaAngleUp></FaAngleUp>
              </button>
              <InputNumber
                inputId="minutes"
                value={minutes}
                format={true}
                onValueChange={(e) => setMinutes(e.value)}
                max={59}
                min={0}
              />
              <button
                type="button"
                className="minute-decrease p-2 hover:bg-gray-300"
                onClick={decreaseMinutes}
              >
                <FaAngleDown></FaAngleDown>
              </button>
            </div>

            <span className="d-block time-divider">:</span>

            <div className="text-center">
              <button
                type="button"
                className="hour-increase p-2 hover:bg-gray-300"
                onClick={() =>
                  setMeridian((current) => (current === "AM" ? "PM" : "AM"))
                }
              >
                <FaAngleUp></FaAngleUp>
              </button>
              <div className="am-pm">{meridian}</div>
              <button
                type="button"
                className="hour-decrease p-2 hover:bg-gray-300"
                onClick={() =>
                  setMeridian((current) => (current === "AM" ? "PM" : "AM"))
                }
              >
                <FaAngleDown></FaAngleDown>
              </button>
            </div>
          </section>

          <div className="form-group flex items-center mt-5">
            <InputSwitch
              checked={repeatAlarm}
              onChange={(e) => setRepeatAlarm(e.value)}
            />
            <label
              htmlFor="repeatAlarm"
              className="ml-3 font-bold text-sm mb-1"
            >
              Repeat Alarm
            </label>
          </div>

          <div className="flex items-center justify-between mt-7">
            <ToggleButton aria-label="Sun" onLabel="Sun" offLabel="Sun" />
            <ToggleButton aria-label="Mon" onLabel="Mon" offLabel="Mon" />
            <ToggleButton aria-label="Tue" onLabel="Tue" offLabel="Tue" />
            <ToggleButton aria-label="Wed" onLabel="Wed" offLabel="Wed" />
            <ToggleButton aria-label="Thu" onLabel="Thu" offLabel="Thu" />
            <ToggleButton aria-label="Fri" onLabel="Fri" offLabel="Fri" />
            <ToggleButton aria-label="Sat" onLabel="Sat" offLabel="Sat" />
          </div>

          <div className="form-group mt-5 flex items-center">
            <IoMusicalNoteOutline className="text-2xl mr-5"></IoMusicalNoteOutline>
            <Dropdown optionLabel="name" placeholder="Select Alarm Music" />
          </div>

          <div className="form-group mt-5 flex items-center">
            <BiAlarmSnooze className="text-2xl mr-5"></BiAlarmSnooze>
            <Dropdown
              optionLabel="name"
              placeholder="Select Snooze Time"
              options={snoozeTimeList}
            />
          </div>
        </form>
      </Dialog>
    </section>
  );
};

export default AddAlarm;
