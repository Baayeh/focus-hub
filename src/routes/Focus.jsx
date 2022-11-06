import React from "react";
import FocusProgress from "../components/FocusProgress";
import MusicPlaylist from "../components/musicPlaylist";

const Focus = () => {
  return (
    <section
      id="focus"
      className="py-4 md:py-10 px-5  grid grid-cols-1 md:grid-cols-2 gap-x-5"
    >
      <div className="focus-todo-section">
        <div className="card bg-white shadow-white-shadow rounded-lg mb-3">
          <div className="card-body p-3">Focus Section</div>
        </div>
        <div className="card bg-white shadow-white-shadow rounded-lg mb-3">
          <div className="card-body p-3">Todo</div>
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
