import React from "react";

const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="form-control form-control-lg"
          />
        </div>
      </div>
      <div className="col-auto">
        <button onClick={addTask} className="btn btn-lg btn-success">
          Add Task
        </button>
      </div>
    </div>
  );
};

export default AddTaskForm;
