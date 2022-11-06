import React from 'react';
import FocusComponent from '../components/FocusComponent';

const Focus = () => {
  return (
    <section
      id="focus"
      className="py-4 md:py-10 px-5 lg:max-w-[70rem]  grid grid-cols-1 md:grid-cols-2 gap-x-5"
    >
      <div className="focus-todo-section">
        <FocusComponent />
        <div className="card bg-white shadow-white-shadow rounded-lg mb-3">
          <div className="card-body p-3">Todo</div>
        </div>
      </div>
      <div className="progress-entertainment">
        <div className="card bg-white shadow-white-shadow rounded-lg mb-3">
          <div className="card-body p-3">Progress</div>
        </div>
        <div className="card bg-white shadow-white-shadow rounded-lg mb-3">
          <div className="card-body p-3">Spotify</div>
        </div>
      </div>
    </section>
  );
};

export default Focus;
