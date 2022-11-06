import React from "react";

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
