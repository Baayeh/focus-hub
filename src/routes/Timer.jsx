import React, { useState } from 'react';
import timerData from '../TimerData/TimerData';
import TimerCard from '../components/TimerCard';
import { BsPen, BsSave } from 'react-icons/bs';
import { GrAdd } from 'react-icons/gr';
import { Dialog } from 'primereact/dialog';
import { RiDeleteBinLine } from 'react-icons/ri';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { FiEdit } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

const Timer = () => {
  const [displayBasic, setDisplayBasic] = useState(false);
  const [hour, setHour] = useState('00');
  const [min, setMin] = useState('00');
  const [secs, setSecs] = useState('00');
  const [dialogTitle, setDialogTitle] = useState('');

  const onClick = (id) => {
    console.log(id);
    setDisplayBasic(true);
  };

  const onHide = () => {
    setDisplayBasic(false);
  };

  const increaseHour = () => {
    let convertHour = Number(hour);
    if (String(convertHour).length === 1) {
      let newString = String(convertHour + 1).padStart(2, '0');
      setHour(newString);
    } else if (String(convertHour).length === 2) {
      let newString = String(convertHour + 1);
      setHour(newString);
    }

    if (convertHour === 99) {
      setHour('00');
    }
  };

  const decreaseHour = () => {
    let convertHour = Number(hour);
    if (String(convertHour).length === 1) {
      let newString = String(convertHour - 1).padStart(2, '0');
      setHour(newString);
    } else if (String(convertHour).length === 2) {
      let newString = String(convertHour - 1);
      setHour(newString);
    }

    if (convertHour === 0) {
      setHour('99');
    }
  };

  const increaseMin = () => {
    let convertMin = Number(min);
    if (String(convertMin).length === 1) {
      let newString = String(convertMin + 1).padStart(2, '0');
      setMin(newString);
    } else if (String(convertMin).length === 2) {
      let newString = String(convertMin + 1);
      setMin(newString);
    }

    if (convertMin === 59) {
      setMin('00');
    }
  };

  const decreaseMin = () => {
    let convertMin = Number(min);
    if (String(convertMin).length === 1) {
      let newString = String(convertMin - 1).padStart(2, '0');
      setMin(newString);
    } else if (String(convertMin).length === 2) {
      let newString = String(convertMin - 1);
      setMin(newString);
    }

    if (convertMin === 0) {
      setMin('59');
    }
  };

  const increaseSecs = () => {
    let convertSecs = Number(secs);
    if (String(convertSecs).length === 1) {
      let newString = String(convertSecs + 1).padStart(2, '0');
      setSecs(newString);
    } else if (String(convertSecs).length === 2) {
      let newString = String(convertSecs + 1);
      setSecs(newString);
    }

    if (convertSecs === 59) {
      setSecs('00');
    }
  };

  const decreaseSecs = () => {
    let convertSecs = Number(secs);
    if (String(convertSecs).length === 1) {
      let newString = String(convertSecs - 1).padStart(2, '0');
      setSecs(newString);
    } else if (String(convertSecs).length === 2) {
      let newString = String(convertSecs - 1);
      setSecs(newString);
    }

    if (convertSecs === 0) {
      setSecs('59');
    }
  };

  return (
    <section
      id="timer-section"
      className="relative z-0 p-3 mb-24 flex flex-col gap-5 md:grid md:grid-cols-2 lg:grid-cols-3"
    >
      {timerData?.map((data) => (
        <TimerCard key={data.id} data={data} label="Show" onClick={onClick} />
      ))}

      <Dialog
        visible={displayBasic}
        showHeader={false}
        dismissableMask={true}
        className="overflow-hidden w-[90vw] md:w-[40vw] lg:w-[23vw]"
        modal
        onHide={() => onHide()}
      >
        <div className="dialog-container py-4">
          <div className="timer-header flex justify-between items-center">
            <h3>Edit Timer</h3>
            <button type="button" className="text-primaryColor text-xl">
              <RiDeleteBinLine />
            </button>
          </div>
          <div className="dialog-body">
            <div className="dialog-time my-8">
              <div className="dialog-hour">
                <div className="increment-btns flex justify-around gap-12 text-2xl">
                  <button
                    type="button"
                    className="time-increase rounded hover:bg-red-100 transition ease-out duration-300"
                    onClick={increaseHour}
                  >
                    <IoIosArrowUp />
                  </button>
                  <button
                    type="button"
                    className="time-increase rounded hover:bg-red-100 transition ease-out duration-300"
                    onClick={increaseMin}
                  >
                    <IoIosArrowUp />
                  </button>
                  <button
                    type="button"
                    className="time-increase rounded hover:bg-red-100 transition ease-out duration-300"
                    onClick={increaseSecs}
                  >
                    <IoIosArrowUp />
                  </button>
                </div>
                <div className="dialog-time p-0.5 text-4xl flex items-center justify-between border border-b-2 border-b-primaryColor rounded my-1">
                  <div className="dialog-hour text-4xl font-semibold">
                    <input
                      type="text"
                      value={hour}
                      onChange={(e) => setHour(e.target.value)}
                      className="p-2 w-[3.6rem] focus:outline-none focus:bg-slate-200"
                    />
                  </div>
                  :
                  <div className="dialog-mins text-4xl font-semibold">
                    <input
                      type="text"
                      value={min}
                      onChange={(e) => setMin(e.target.value)}
                      className="p-2 w-[3.6rem] focus:outline-none focus:bg-slate-200"
                    />
                  </div>
                  :
                  <div className="dialog-secs text-4xl font-semibold">
                    <input
                      type="text"
                      value={secs}
                      onChange={(e) => setSecs(e.target.value)}
                      className="p-2 w-[3.6rem] focus:outline-none focus:bg-slate-200"
                    />
                  </div>
                </div>
                <div className="decrement-btns  flex justify-around gap-12 text-2xl">
                  <button
                    type="button"
                    className="time-decrease rounded hover:bg-red-100 transition ease-out duration-300"
                    onClick={decreaseHour}
                  >
                    <IoIosArrowDown />
                  </button>
                  <button
                    type="button"
                    className="time-decrease rounded hover:bg-red-100 transition ease-out duration-300"
                    onClick={decreaseMin}
                  >
                    <IoIosArrowDown />
                  </button>
                  <button
                    type="button"
                    className="time-decrease rounded hover:bg-red-100 transition ease-out duration-300"
                    onClick={decreaseSecs}
                  >
                    <IoIosArrowDown />
                  </button>
                </div>
              </div>
            </div>

            <div className="timer-name flex gap-2 items-center">
              <span>
                <FiEdit />
              </span>
              <input
                type="text"
                name="timer-name"
                title="Timer Name"
                placeholder="Timer Name"
                className="border w-full rounded p-1 focus:outline-none focus:border-b-2 focus:border-b-primaryColor transition ease-out duration-300"
              />
            </div>

            <div className="dialog-actions mt-10 flex gap-3 justify-center">
              <button
                type="button"
                className="flex items-center gap-3 bg-slate-500 text-white rounded px-5 py-2"
                onClick={onHide}
              >
                <span>
                  <AiOutlineClose />
                </span>
                <span>Cancel</span>
              </button>
              <button
                type="button"
                className="flex items-center gap-3 bg-primaryColor text-white rounded px-7 py-2"
              >
                <span>
                  <BsSave />
                </span>
                <span>Save</span>
              </button>
            </div>
          </div>
        </div>
      </Dialog>

      <div className="floating-actions shadow shadow-gray-500 rounded-md fixed right-6 bottom-6 mb-20 md:mb-0 p-1 border-primaryColor bg-slate-300">
        <button
          type="button"
          className="p-3 hover:bg-slate-200 rounded-md transition ease-out duration-300"
        >
          <BsPen />
        </button>
        <button
          type="button"
          className="p-3 hover:bg-slate-200 rounded-md transition ease-out duration-300"
          onClick={onClick}
        >
          <GrAdd />
        </button>
      </div>
    </section>
  );
};

export default Timer;
