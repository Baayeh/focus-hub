import React, { useState } from 'react';
import { TbPictureInPictureTop, TbDots } from 'react-icons/tb';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { BsFillPlayFill } from 'react-icons/bs';
import { Checkbox } from 'primereact/checkbox';

const FocusComponent = () => {
  const [disable, setDisable] = useState(true);
  const [checked, setChecked] = useState(false);

  return (
    <div className="focus-comonent card bg-white shadow-white-shadow rounded-lg mb-3 p-2">
      <div className="focus-header flex justify-end items-center gap-1">
        <button type="button" className="hover:bg-slate-100 p-2 rounded">
          <TbPictureInPictureTop />
        </button>
        <button type="button" className="hover:bg-slate-100 p-2 rounded">
          <TbDots />
        </button>
      </div>
      <div className="card-body text-center px-3">
        <h3 className="font-bold text-xl">Ready, set, focus!</h3>
        <p className="text-sm my-1">
          Achieve you goals and get more done with focus sessions. Tell us how
          much time you have, and we'll set up the rest.
        </p>

        <div className="set-focus-time border-b-2 border-primaryColor bg-slate-100 max-w-[9rem] mx-auto rounded flex mt-8">
          <div className="focus-time w-[8rem] flex flex-col items-center justify-center p-3">
            <span className="text-4xl font-bold">15</span>
            <span className="text-xs">mins</span>
          </div>
          <div className="focus-time-actions flex flex-col items-center justify-center border-l">
            <button type="button" className="hover:bg-slate-200 p-3 border-b">
              <IoIosArrowUp />
            </button>
            <button type="button" className="hover:bg-slate-200 p-3">
              <IoIosArrowDown />
            </button>
          </div>
        </div>

        <p className="text-xs my-4">You'll have no breaks.</p>

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
          >
            <BsFillPlayFill className="text-2xl" />
            <span className="text-sm">Start focus session</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FocusComponent;
