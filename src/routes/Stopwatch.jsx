import React from 'react';
import { BiExpandAlt } from 'react-icons/bi';
import { TbPictureInPictureTop } from 'react-icons/tb';

const Stopwatch = () => {
  return (
    <section
      id="stopwatch"
      className="h-screen flex flex-col items-center pt-36  max-w-lg mx-auto gap-5"
    >
      <div className="header-actions text-primaryColor flex w-full justify-end pr-8">
        <button type="button">
          <BiExpandAlt className="text-xl" />
        </button>
        <button type="button" className="ml-4">
          <TbPictureInPictureTop className="text-xl" />
        </button>
      </div>
      <div className="stopwatch-body flex items-baseline text-6xl md:text-8xl font-semibold">
        <span className="stop-hour flex flex-col items-center">
          00
          <span className="text-xl md:text-2xl">hr</span>
        </span>
        <span className="">:</span>
        <span className="stop-mins flex flex-col items-center">
          00
          <span className="text-xl md:text-2xl">min</span>
        </span>
        <span className="">:</span>
        <span className="stop-sec flex flex-col items-center">
          00
          <span className="text-xl md:text-2xl">sec</span>
        </span>
        <span className="stop-hour">.</span>
        <span className="stop-hour text-5xl md:text-7xl">00</span>
      </div>
    </section>
  );
};

export default Stopwatch;
