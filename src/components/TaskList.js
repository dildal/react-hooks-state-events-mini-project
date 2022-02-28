import React from "react";
import Task from './Task'

function TaskList({handleDelete, tasks}) {
  const mapTasks = tasks.map(task => {
    return <Task 
      key={task.text}
      text={task.text}
      handleDelete={handleDelete}
      category={task.category}
      />
  })
  return (
    <div className="tasks">
      {mapTasks}
    </div>
  );
}

export default TaskList;
