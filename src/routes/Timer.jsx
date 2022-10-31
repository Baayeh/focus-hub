import React from 'react'
import { BiExpandAlt } from 'react-icons/bi'
import { TbPictureInPictureTop } from 'react-icons/tb'
import { BsFillPlayFill, BsPen } from 'react-icons/bs'
import { GrPowerReset, GrAdd } from 'react-icons/gr'

const Timer = () => {
  return (
    <section id='timer-section' className='relative z-0 p-3 mb-24 flex flex-col gap-5 md:grid md:grid-cols-2 lg:grid-cols-3'>
      <div className='timer-card'>
        <div className="timer-head flex justify-between items-center text-primaryColor">
          <p>1 min</p>
          <div className='head-actions'>
            <button type='button'>
              <BiExpandAlt className='text-xl' />
            </button>
            <button type='button' className='ml-4'>
              <TbPictureInPictureTop className='text-xl' />
            </button>
          </div>
        </div>
        <div className="timer-body">
          <div className="cirlce border-[16px] w-56 h-56 rounded-full mx-auto flex justify-center items-center">
            <div className="timer-clock text-[2.7rem] font-extrabold flex items-center">
              <span>00</span>
              :
              <span>01</span>
              :
              <span>00</span>
            </div>
          </div>
        </div>

        <div className="timer-actions flex justify-center items-center my-5 gap-4">
          <button type='button' className='text-2xl bg-blue-300 rounded-full p-2'>
            <BsFillPlayFill className='' />
          </button>
          <button type='button' className='text-2xl bg-gray-200 rounded-full p-2'>
            <GrPowerReset />
          </button>
        </div>
      </div>

      <div className='timer-card'>
        <div className="timer-head flex justify-between items-center text-primaryColor">
          <p>3 min</p>
          <div className='head-actions'>
            <button type='button'>
              <BiExpandAlt className='text-xl' />
            </button>
            <button type='button' className='ml-4'>
              <TbPictureInPictureTop className='text-xl' />
            </button>
          </div>
        </div>
        <div className="timer-body">
          <div className="cirlce border-[16px] w-56 h-56 rounded-full mx-auto flex justify-center items-center">
            <div className="timer-clock text-[2.7rem] font-extrabold flex items-center">
              <span>00</span>
              :
              <span>03</span>
              :
              <span>00</span>
            </div>
          </div>
        </div>

        <div className="timer-actions flex justify-center items-center my-5 gap-4">
          <button type='button' className='text-2xl bg-blue-300 rounded-full p-2'>
            <BsFillPlayFill className='' />
          </button>
          <button type='button' className='text-2xl bg-gray-200 rounded-full p-2'>
            <GrPowerReset />
          </button>
        </div>
      </div>

      <div className='timer-card'>
        <div className="timer-head flex justify-between items-center text-primaryColor">
          <p>5 min</p>
          <div className='head-actions'>
            <button type='button'>
              <BiExpandAlt className='text-xl' />
            </button>
            <button type='button' className='ml-4'>
              <TbPictureInPictureTop className='text-xl' />
            </button>
          </div>
        </div>
        <div className="timer-body">
          <div className="cirlce border-[16px] w-56 h-56 rounded-full mx-auto flex justify-center items-center">
            <div className="timer-clock text-[2.7rem] font-extrabold flex items-center">
              <span>00</span>
              :
              <span>05</span>
              :
              <span>00</span>
            </div>
          </div>
        </div>

        <div className="timer-actions flex justify-center items-center my-5 gap-4">
          <button type='button' className='text-2xl bg-blue-300 rounded-full p-2'>
            <BsFillPlayFill className='' />
          </button>
          <button type='button' className='text-2xl bg-gray-200 rounded-full p-2'>
            <GrPowerReset />
          </button>
        </div>
      </div>

      <div className='timer-card'>
        <div className="timer-head flex justify-between items-center text-primaryColor">
          <p>10 min</p>
          <div className='head-actions'>
            <button type='button'>
              <BiExpandAlt className='text-xl' />
            </button>
            <button type='button' className='ml-4'>
              <TbPictureInPictureTop className='text-xl' />
            </button>
          </div>
        </div>
        <div className="timer-body">
          <div className="cirlce border-[16px] w-56 h-56 rounded-full mx-auto flex justify-center items-center">
            <div className="timer-clock text-[2.7rem] font-extrabold flex items-center">
              <span>00</span>
              :
              <span>10</span>
              :
              <span>00</span>
            </div>
          </div>
        </div>

        <div className="timer-actions flex justify-center items-center my-5 gap-4">
          <button type='button' className='text-2xl bg-blue-300 rounded-full p-2'>
            <BsFillPlayFill className='' />
          </button>
          <button type='button' className='text-2xl bg-gray-200 rounded-full p-2'>
            <GrPowerReset />
          </button>
        </div>
      </div>

      <div className="floating-actions shadow shadow-gray-500 rounded-md fixed right-6 bottom-6 mb-20 md:mb-0 p-1 border-primaryColor bg-slate-300">
        <button type='button' className='p-3 hover:bg-slate-200 rounded-md transition ease-out duration-300'>
          <BsPen />
        </button>
        <button type='button' className='p-3 hover:bg-slate-200 rounded-md transition ease-out duration-300'>
          <GrAdd />
        </button>
      </div>
    </section>
  )
}

export default Timer
