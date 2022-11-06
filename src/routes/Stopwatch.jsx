import React, { useRef, useState, useEffect } from 'react';
import { BiExpandAlt } from 'react-icons/bi';
import { TbPictureInPictureTop } from 'react-icons/tb';
import { BsFillPlayFill, BsArrowsAngleContract } from 'react-icons/bs';
import { GrPowerReset } from 'react-icons/gr';
import { AiOutlinePause } from 'react-icons/ai';
import { useOutletContext } from 'react-router-dom';

const Stopwatch = () => {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const stopwatch = useRef();
  const stopwatchBody = useRef();
  const current = useOutletContext();
  const [isHidden, setIsHidden] = useState(false);

  const expandSection = () => {
    current.style.display = 'none';
    setIsHidden(true);
    stopwatch.current.classList.add(
      'translate-y-16',
      'md:translate-y-16',
      'md:-translate-x-16',
      'transition',
      'ease-in-out',
      'duration-300'
    );

    stopwatchBody.current.classList.remove('stopwatch-body');
    stopwatchBody.current.classList.add('stopwatchExpand-body');
  };

  const restoreSection = () => {
    setIsHidden(false);
    stopwatch.current.classList.remove(
      'translate-y-16',
      'md:translate-y-16',
      'md:-translate-x-16'
    );
    stopwatchBody.current.classList.add('stopwatch-body');
    stopwatchBody.current.classList.remove('stopwatchExpand-body');
    current.style.display = 'block';
  };

  useEffect(() => {
    let interval;

    if (timer) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 10);
      }, 10);
    } else if (!timer) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const startWatch = () => {
    setTimer(true);
    setIsPaused(false);
  };

  const pauseResume = () => {
    setIsPaused(!isPaused);
    setTimer(false);
  };

  const resetWatch = () => {
    setTimer(false);
    setCount(0);
  };

  return (
    <section className="stopwatch" ref={stopwatch}>
      <div className="header-actions">
        {!isHidden ? (
          <>
            <button type="button" onClick={expandSection}>
              <BiExpandAlt className="text-xl" />
            </button>
            <button type="button" className="ml-4">
              <TbPictureInPictureTop className="text-xl" />
            </button>
          </>
        ) : (
          <button type="button" onClick={restoreSection}>
            <BsArrowsAngleContract className="text-xl" />
          </button>
        )}
      </div>
      <div className="stopwatch-body" ref={stopwatchBody}>
        <span className="digits">
          {('0' + Math.floor((count / 360000000) % 60)).slice(-2)}
          <span className="text-xl md:text-2xl">hr</span>
        </span>
        <span className="">:</span>
        <span className="digits">
          {('0' + Math.floor((count / 60000) % 60)).slice(-2)}
          <span className="text-xl md:text-2xl">min</span>
        </span>
        <span className="">:</span>
        <span className="digits">
          {('0' + Math.floor((count / 1000) % 60)).slice(-2)}
          <span className="text-xl md:text-2xl">sec</span>
        </span>
        <span>.</span>
        <span className="digits text-5xl md:text-7xl">
          {('0' + ((count / 10) % 100)).slice(-2)}
        </span>
      </div>
      <div className="stopwatch-actions flex gap-8">
        {!timer ? (
          <button
            type="button"
            className="start-stopwatch"
            onClick={startWatch}
          >
            <BsFillPlayFill />
          </button>
        ) : (
          <button
            type="button"
            className="start-stopwatch"
            onClick={pauseResume}
          >
            <AiOutlinePause />
          </button>
        )}
        <button type="button" className="reset-stopwatch" onClick={resetWatch}>
          <GrPowerReset />
        </button>
      </div>
    </section>
  );
};

export default Stopwatch;
