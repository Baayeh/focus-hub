import React, { useState, useEffect } from 'react';
import { TbPictureInPictureTop, TbDots } from 'react-icons/tb';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { BsFillPlayFill, BsStopFill } from 'react-icons/bs';
import { Checkbox } from 'primereact/checkbox';
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar';

const FocusComponent = () => {
  const [disable, setDisable] = useState(true);
  const [checked, setChecked] = useState(false);
  const [timer, setTimer] = useState(15);
  const [breakTime, setBreakTime] = useState(0);
  const [session, setSession] = useState(false);
  const [count, setCount] = useState(0);

  const increaseTimer = () => {
    setTimer((prevTimer) => prevTimer + 15);
  };

  const decreaseTimer = () => {
    if (timer > 15) {
      setTimer((prevTimer) => prevTimer - 15);
    }
  };

  const startSession = () => {
    setSession(true);
  };

  const stopSession = () => {
    setSession(false);
  };

  useEffect(() => {
    const breakNo = Math.floor(timer / 20);
    setBreakTime(breakNo);
  }, [timer]);

  useEffect(() => {
    if (timer > 20) {
      setDisable(false);
    } else {
      setDisable(true);
      setChecked(false);
    }
  }, [timer]);

  return (
    <div className="focus-comonent card bg-white shadow-white-shadow rounded-lg mb-3 p-2">
      <div className="focus-header flex justify-between items-center gap-1">
        {session ? (
          <h4 className="pl-4 font-semibold w-[11rem]">Focus Time</h4>
        ) : (
          ''
        )}
        <div className="text-primaryColor flex w-full justify-end">
          <button type="button" className="hover:bg-slate-100 p-2 rounded">
            <TbPictureInPictureTop />
          </button>
          <button type="button" className="hover:bg-slate-100 p-2 rounded">
            <TbDots />
          </button>
        </div>
      </div>
      {!session ? (
        <div className="card-body text-center px-3">
          <h3 className="font-bold text-xl">Ready, set, focus!</h3>
          <p className="text-sm my-1">
            Achieve you goals and get more done with focus sessions. Tell us how
            much time you have, and we'll set up the rest.
          </p>

          <div className="set-focus-time border-b-2 border-primaryColor bg-slate-50 max-w-[9rem] mx-auto rounded overflow-hidden flex mt-8 hover:bg-slate-100">
            <div className="focus-time w-[8rem] flex flex-col items-center justify-center p-3">
              <span className="text-4xl font-bold">{timer}</span>
              <span className="text-xs">mins</span>
            </div>
            <div className="focus-time-actions flex flex-col items-center justify-center border-l border-slate-200">
              <button
                type="button"
                className="hover:bg-slate-200 p-3 border-b border-slate-200"
                onClick={increaseTimer}
              >
                <IoIosArrowUp />
              </button>
              <button
                type="button"
                className="hover:bg-slate-200 p-3"
                onClick={decreaseTimer}
              >
                <IoIosArrowDown />
              </button>
            </div>
          </div>

          <p className="text-xs my-4">
            {breakTime === 0 || checked
              ? "You'll have no breaks"
              : `You'll have ${breakTime} breaks.`}
          </p>

          <div className="focus-checkbox flex gap-2 justify-center items-center">
            <Checkbox
              inputId="focus-checkbox"
              disabled={disable}
              checked={checked}
              onChange={(e) => setChecked(e.checked)}
            ></Checkbox>
            <label
              htmlFor="focus-checkbox"
              className={`${
                disable ? 'text-slate-400' : 'text-secondaryColor'
              } p-checkbox-label text-sm`}
            >
              Skip breaks
            </label>
          </div>

          <div className="focus-actions mt-5 mb-14 flex justify-center">
            <button
              type="button"
              className="bg-primaryColor hover:shadow hover:shadow-gray-500 transition-all ease-out duration-300 flex justify-center items-center text-white p-2 rounded-md"
              onClick={startSession}
            >
              <BsFillPlayFill className="text-2xl" />
              <span className="text-sm">Start focus session</span>
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="w-[17.65rem] h-[17.65rem] md:w-[16.4rem] md:h-[16.4rem] mx-auto">
            <CircularProgressbarWithChildren
              value={count}
              styles={buildStyles({ pathColor: '#dd1818', textColor: '#f88' })}
            >
              <div className="text-6xl md:text-6xl font-bold">
                <span>{timer}</span>
                <span>:</span>
                <span>00</span>
              </div>
            </CircularProgressbarWithChildren>
          </div>

          <div className="stop-session flex justify-center my-8">
            <button
              type="button"
              className="p-2 bg-primaryColor rounded-full text-3xl"
              onClick={stopSession}
            >
              <BsStopFill />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default FocusComponent;
