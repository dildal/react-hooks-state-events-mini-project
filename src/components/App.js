import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState('All');
  
  function handleDelete(text){
    setTasks(tasks.filter(task => task.text !== text));
  }

  function handleCategoryChange(category){
    setCategory(category)
  }

  function addTask(newTask){
    setTasks([...tasks, newTask]);
  }

  const tasksToDisplay = tasks.filter(task => {
    if(category === 'All'){
      return true;
    }
    return category === task.category
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        handleCategoryChange={handleCategoryChange}
        categories={CATEGORIES}
      />
      <NewTaskForm 
        onTaskFormSubmit={addTask}
        categories={CATEGORIES}
        />
      <TaskList 
        handleDelete={handleDelete} 
        tasks={tasksToDisplay}
      />
    </div>
  );
}

export default App;
