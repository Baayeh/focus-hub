import React from 'react';
import { FaCheckDouble } from 'react-icons/fa';
import { TbDots } from 'react-icons/tb';

const TodoComponent = () => {
  return (
    <div className="p-2">
      <div className="todo-header flex justify-between items-center">
        <div className="todo-logo flex gap-2 items-center">
          <span>
            <FaCheckDouble />
          </span>
          <span>To Do</span>
        </div>
        <div className="dots">
          <TbDots />
        </div>
      </div>
      <div className="todo-body">
        <p className="text-center text-sm p-10">
          Sign in with your account to create tasks and pick a task for a focus
          session. Your tasks will synced with your account.
        </p>
      </div>
    </div>
  );
};

export default TodoComponent;
