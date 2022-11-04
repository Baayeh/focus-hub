import React, { useEffect, useState } from 'react';
import timerData from '../TimerData/TimerData';
import TimerCard from '../components/TimerCard';
import Dialog from '../components/Dialog';
import { BsPen } from 'react-icons/bs';
import { GrAdd } from 'react-icons/gr';

const Timer = () => {
  const [displayBasic, setDisplayBasic] = useState(false);
  const [id, setId] = useState(null);
  const [editTimer, setEditTimer] = useState(null);

  const onClick = (id) => {
    setId(id);
    setDisplayBasic(true);
  };

  const onHide = () => {
    setDisplayBasic(false);
  };

  const addTimer = () => {
    setId(null);
    setEditTimer(null);
    setDisplayBasic(true);
  };

  useEffect(() => {
    if (id) {
      const result = timerData?.find((data) => id === data.id);
      setEditTimer(result);
    }
  }, [id]);

  return (
    <section
      id="timer-section"
      className="relative z-0 p-3 mb-24 flex flex-col gap-5 md:grid md:grid-cols-2 lg:grid-cols-3"
    >
      {timerData?.map((data) => (
        <TimerCard key={data.id} data={data} label="Show" onClick={onClick} />
      ))}

      <Dialog data={editTimer} displayBasic={displayBasic} onHide={onHide} />

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
          onClick={addTimer}
        >
          <GrAdd />
        </button>
      </div>
    </section>
  );
};

export default Timer;
