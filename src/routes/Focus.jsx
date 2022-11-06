import React from 'react';
import FocusComponent from '../components/FocusComponent';
import FocusProgress from '../components/FocusProgress';
import MusicPlaylist from '../components/musicPlaylist';
import TodoComponent from '../components/TodoComponent';

const Focus = () => {
  return (
    <section
      id="focus"
      className="py-4 md:py-10 px-5 lg:max-w-[70rem]  grid grid-cols-1 md:grid-cols-2 gap-x-5"
    >
      <div className="focus-todo-section">
        <FocusComponent />
        <div className="card bg-white shadow-white-shadow rounded-lg mb-3">
          <TodoComponent />
        </div>
      </div>
      <div className="progress-entertainment w-[100%] lg:w-[80%]">
        <div className="card bg-white shadow-white-shadow rounded-lg mb-3">
          <div className="card-body p-4">
            <FocusProgress></FocusProgress>
          </div>
        </div>
        <div className="card bg-white shadow-white-shadow rounded-lg mb-3">
          <div className="card-body p-3">
            <MusicPlaylist></MusicPlaylist>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Focus;
