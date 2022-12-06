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
  const [timer, setTimer] = useState(0);
  const [mins, setMins] = useState(15);
  const [secs, setSecs] = useState(0);
  const [breakTimer, setBreakTimer] = useState(0);
  const [breakSecs, setBreaksecs] = useState(0);
  const [breakTime, setBreakTime] = useState(0);
  const [isbreakTime, setIsBreakTime] = useState(false);
  const [session, setSession] = useState(false);
  const [count, setCount] = useState(100);

  const makeTwoDigits = (num) => (num < 10 ? '0' : '') + num;

  const increaseTimer = () => {
    setMins((prevMins) => prevMins + 15);
  };

  const decreaseTimer = () => {
    if (mins > 15) {
      setMins((prevMins) => prevMins - 15);
    }
  };

  const startSession = (e) => {
    setSession(true);
    setTimer(0);
    setSecs(30);
    setBreakTimer(0);
    setBreaksecs(0);
    setCount(100);
  };

  const stopSession = () => {
    setSession(false);
    setIsBreakTime(false);
    setTimer(0);
    setSecs(0);
    setCount(100);
  };

  useEffect(() => {
    let interval;

    if (isbreakTime) {
      interval = setInterval(() => {
        setBreaksecs((prevSecs) => makeTwoDigits(prevSecs - 1));
      }, 1000);

      if (Number(breakSecs) === 0) {
        setBreakTimer((prevTimer) => makeTwoDigits(prevTimer - 1));
        setBreaksecs(59);
        setCount(
          (prevCount) => prevCount - Math.round(prevCount / Number(timer))
        );
      }

      if (Number(breakTimer) === 0 && Number(breakSecs) === 0) {
        setBreakTimer(0);
        setBreaksecs(0);
        setCount(100);
        setIsBreakTime(false);
        setBreakTime(prevCount => prevCount - 1)
        clearInterval(interval)
        setTimer(0);
        setSecs(30);
      }
    }

    return () => clearInterval(interval)
  }, [isbreakTime, breakSecs, breakTimer]);

  console.log(breakTimer, breakSecs, isbreakTime, breakTime, secs, timer)

  useEffect(() => {
    let interval;
    if (session && !isbreakTime) {
      interval = setInterval(() => {
        setSecs((prevSecs) => makeTwoDigits(prevSecs - 1));
      }, 1000);

      if (Number(secs) === 0) {
        setTimer((prevTimer) => makeTwoDigits(prevTimer - 1));
        setSecs(59);
        setCount(
          (prevCount) => prevCount - Math.round(prevCount / Number(timer))
        );
      }

      if (Number(timer) === 0 && Number(secs) === 0) {
        if (breakTime > 0) {
          setIsBreakTime(true);
          setBreakTimer(0);
          setBreaksecs(15);
        }else{
          clearInterval(interval)
          setSession(false)
          setTimer(0);
          setSecs(0);
          setCount(100);
          setBreakTimer(0);
          setBreaksecs(0);
          setBreakCount(mins)
        }
      }
    }
    return () => clearInterval(interval);
  }, [session, secs, timer]);

  useEffect(() => {
    setBreakCount(mins)

    if (mins > 20) {
      setDisable(false);
    } else {
      setDisable(true);
      setChecked(false);
    }
  }, [mins]);

  const setBreakCount = (mins) => {
    const breakNo = Math.floor(mins / 25);
    setBreakTime(breakNo);
  }

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
              <span className="text-4xl font-bold">{mins}</span>
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
              counterClockwise={true}
            >
              {!isbreakTime ? (
                <div
                  className="text-6xl md:text-6xl"
                  style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
                >
                  <span>{timer}</span>
                  <span>:</span>
                  <span>{secs}</span>
                </div>
              ) : (
                <div
                  className="text-2xl md:text-2xl"
                  style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
                >
                  <h3>Break Time</h3>
                  <div className="font-semibold flex justify-center text-3xl md:text-4xl">
                    <span>{breakTimer}</span>
                    <span>:</span>
                    <span>{breakSecs}</span>
                  </div>
                </div>
              )}
            </CircularProgressbarWithChildren>
          </div>

          {breakTime > 0 && <p>Up Next: 5 mins break</p>}

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
