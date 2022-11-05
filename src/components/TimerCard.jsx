import React from 'react';
import { BiExpandAlt } from 'react-icons/bi';
import { TbPictureInPictureTop } from 'react-icons/tb';
import { BsFillPlayFill } from 'react-icons/bs';
import { GrPowerReset } from 'react-icons/gr';

const TimerCard = ({ data, onClick }) => {
  return (
    <div
      className="timer-card"
      onClick={() => {
        onClick(data.id);
      }}
    >
      <div className="timer-head flex justify-between items-center text-primaryColor">
        <p>{data.name}</p>
        <div className="head-actions">
          <button type="button">
            <BiExpandAlt className="text-xl" />
          </button>
          <button type="button" className="ml-4">
            <TbPictureInPictureTop className="text-xl" />
          </button>
        </div>
      </div>
      <div className="timer-body">
        <div className="cirlce border-[16px] w-56 h-56 rounded-full mx-auto flex justify-center items-center">
          <div className="timer-clock text-[2.7rem] font-extrabold flex items-center">
            <span>{data.hour}</span>:<span>{data.min}</span>:
            <span>{data.secs}</span>
          </div>
        </div>
      </div>

      <div className="timer-actions flex justify-center items-center my-5 gap-4">
        <button
          type="button"
          className="text-2xl bg-primaryColor text-white rounded-full p-2"
        >
          <BsFillPlayFill className="" />
        </button>
        <button type="button" className="text-2xl bg-gray-200 rounded-full p-2">
          <GrPowerReset />
        </button>
      </div>
    </div>
  );
};

export default TimerCard;
