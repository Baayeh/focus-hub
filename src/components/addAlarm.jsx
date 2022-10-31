import { useState } from "react";
import { Dialog } from "primereact/dialog";
import { InputNumber } from "primereact/inputnumber";
import { InputSwitch } from "primereact/inputswitch";
import { Checkbox } from "primereact/checkbox";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

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
    return <div></div>;
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
      >
        <form action="" className="mt-2">
          <div className="form-group mb-3">
            <input
              type="text"
              placeholder="Set Alarm Name"
              className="form-control w-full border border-gray-300 p-4 h-[50px] border-l-0 border-r-0 border-t-0 focus:border focus:outline-none focus:ring-2 ring-offset-0"
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

          <div className="form-group flex items-center mt-3">
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

          <div className="flex items-center justify-between mt-4">
            <div className="field-checkbox">
              <Checkbox inputId="city1" name="city" value="Chicago" />
              <label htmlFor="city1" className="ml-1">
                Sun
              </label>
            </div>
            <div className="field-checkbox">
              <Checkbox inputId="city2" name="city" value="Los Angeles" />
              <label htmlFor="city2" className="ml-1">
                Mon
              </label>
            </div>
            <div className="field-checkbox">
              <Checkbox inputId="city3" name="city" value="New York" />
              <label htmlFor="city3" className="ml-1">
                Tue
              </label>
            </div>
            <div className="field-checkbox">
              <Checkbox inputId="city4" name="city" value="San Francisco" />
              <label htmlFor="city4" className="ml-1">
                Wed
              </label>
            </div>

            <div className="field-checkbox">
              <Checkbox inputId="city4" name="city" value="San Francisco" />
              <label htmlFor="city4" className="ml-1">
                Thur
              </label>
            </div>

            <div className="field-checkbox">
              <Checkbox inputId="city4" name="city" value="San Francisco" />
              <label htmlFor="city4" className="ml-1">
                Fri
              </label>
            </div>

            <div className="field-checkbox">
              <Checkbox inputId="city4" name="city" value="San Francisco" />
              <label htmlFor="city4" className="ml-1">
                Sat
              </label>
            </div>
          </div>
        </form>
      </Dialog>
    </section>
  );
};

export default AddAlarm;
