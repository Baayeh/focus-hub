import { useState, useEffect } from "react";
import { Dialog } from "primereact/dialog";
import { InputSwitch } from "primereact/inputswitch";
import { ToggleButton } from "primereact/togglebutton";
import { FaAngleUp, FaAngleDown, FaTimes } from "react-icons/fa";
import { BsCheckAll, BsTrash } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
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

const AddAlarm = ({
  displayDialog,
  setDisplayDialog,
  editAlarm,
  setEditAlarm,
}) => {
  const [hour, setHour] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [meridian, setMeridian] = useState("AM");
  const [repeatAlarm, setRepeatAlarm] = useState(false);

  const increaseHour = () => {
    setHour((current) => {
      const result = Number(current) + 1;
      return String(result).length === 1
        ? 0 + String(result)
        : Number(result) > 12
        ? "01"
        : String(result);
    });
  };

  const decreaseHour = () => {
    setHour((current) => {
      const result = Number(current) - 1;
      return Number(result) < 0
        ? "12"
        : String(result).length === 1
        ? 0 + String(result)
        : String(result);
    });
  };

  const increaseMinutes = () => {
    setMinutes((current) => {
      const result = Number(current) + 1;
      return String(result).length === 1
        ? 0 + String(result)
        : Number(result) > 59
        ? "00"
        : String(result);
    });
  };

  const decreaseMinutes = () => {
    setMinutes((current) => {
      const result = Number(current) - 1;
      return Number(result) < 0
        ? "59"
        : String(result).length === 1
        ? 0 + String(result)
        : String(result);
    });
  };

  const updateHourField = (e) => {
    const inputValue = e.target.value.replace(/[^0-9]/g, "");
    setHour((current) => {
      const totalHour = current.slice(-1) + inputValue.slice(-1);
      return Number(totalHour) > 12 ? "0" + totalHour.slice(-1) : totalHour;
    });
  };

  const updateMinutesField = (e) => {
    const inputValue = e.target.value.replace(/[^0-9]/g, "");
    setMinutes((current) => {
      const totalMinutes = current.slice(-1) + inputValue.slice(-1);
      return Number(totalMinutes) > 59
        ? "0" + totalMinutes.slice(-1)
        : totalMinutes;
    });
  };

  const resetDialog = () => {
    setDisplayDialog(false);
    setEditAlarm(null);
  };

  const renderFooter = () => {
    return (
      <div className="flex items-center justify-center mt-4 space-x-2">
        <button
          onClick={resetDialog}
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

  const renderHeader = () => {
    return (
      <div className="dialog-header flex items-center justify-between">
        <h4 className="font-bold text-lg">
          {editAlarm ? "Edit Alarm" : "Add New Alarm"}
        </h4>

        {editAlarm && (
          <button type="button" className="p-1">
            <BsTrash className="text-red-500"></BsTrash>
          </button>
        )}
      </div>
    );
  };

  useEffect(() => {
    if (editAlarm) {
      setHour("05");
      setMinutes("30");
      setMeridian("AM");
    } else {
      setHour("00");
      setMinutes("00");
      setMeridian("AM");
    }
  }, [editAlarm]);

  const validateOnChange = (data) => {
    console.log(data);
  };

  return (
    <section id="Add-Alarm">
      <Dialog
        visible={displayDialog}
        footer={renderFooter}
        header={renderHeader}
        onHide={() => setDisplayDialog(false)}
        closable={false}
        closeOnEscape={true}
        dismissableMask={true}
        className="add-alarm-dialog"
      >
        <form className="mt-2">
          <section>
            <div className="flex items-center justify-between">
              <div className="alarm-btn-container">
                <button
                  type="button"
                  className="hour-increase p-2 hover:bg-gray-300"
                  onClick={increaseHour}
                >
                  <FaAngleUp className="text-xl"></FaAngleUp>
                </button>
              </div>

              <div className="alarm-btn-container">
                <button
                  type="button"
                  className="minute-increase p-2 hover:bg-gray-300"
                  onClick={increaseMinutes}
                >
                  <FaAngleUp className="text-xl"></FaAngleUp>
                </button>
              </div>

              <div className="alarm-btn-container">
                <button
                  type="button"
                  className="hour-increase p-2 hover:bg-gray-300"
                  onClick={() =>
                    setMeridian((current) => (current === "AM" ? "PM" : "AM"))
                  }
                >
                  <FaAngleUp className="text-xl"></FaAngleUp>
                </button>
              </div>
            </div>
            <div className="alarm-timer-box flex items-center justify-between bg-gray-100 border-t-2 border-l-2 border-r-2 border-b-4 border-b-primaryColor border-gray-300 rounded-md">
              <input
                type="text"
                value={hour}
                className="alarmInputField "
                onChange={updateHourField}
              />

              <span className="d-block time-divider">:</span>

              <input
                type="text"
                value={minutes}
                className="alarmInputField"
                onChange={updateMinutesField}
              />

              <span className="d-block time-divider">:</span>

              <input
                type="text"
                name="meridian"
                defaultValue={meridian}
                className="alarmInputField"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="alarm-btn-container">
                <button
                  type="button"
                  className="hour-decrease p-2 hover:bg-gray-300"
                  onClick={decreaseHour}
                >
                  <FaAngleDown className="text-xl"></FaAngleDown>
                </button>
              </div>

              <div className="alarm-btn-container">
                <button
                  type="button"
                  className="minute-decrease p-2 hover:bg-gray-300"
                  onClick={decreaseMinutes}
                >
                  <FaAngleDown className="text-xl"></FaAngleDown>
                </button>
              </div>

              <div className="alarm-btn-container">
                <button
                  type="button"
                  className="hour-decrease p-2 hover:bg-gray-300"
                  onClick={() =>
                    setMeridian((current) => (current === "AM" ? "PM" : "AM"))
                  }
                >
                  <FaAngleDown className="text-xl"></FaAngleDown>
                </button>
              </div>
            </div>
          </section>

          <div className="form-group flex items-center">
            <AiOutlineEdit className="text-2xl mr-5"></AiOutlineEdit>
            <input
              type="text"
              name="title"
              placeholder="Set Alarm Name"
              className="form-control w-full border border-gray-300 p-4 h-[50px] border-l-0 border-r-0 border-t-0 focus:border focus:outline-none focus:ring-2 ring-offset-0 ring-primaryLightColor"
            />
          </div>

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
