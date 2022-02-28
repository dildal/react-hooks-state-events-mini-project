import React, {useState} from "react";

function NewTaskForm({onTaskFormSubmit, categories}) {
  const [newTask, setNewTask] = useState({text: '', category: 'Code'})
  function handleChange(e){
    setNewTask({...newTask, [e.target.name]: e.target.value})
  }

  const categoriesToDisplay = categories.filter(category => category !== 'All').map(category => {
    return <option key={category} value={category}>{category}</option>
  })

  function handleSubmitClick(e){
    e.preventDefault();
    onTaskFormSubmit(newTask)
  }


  return (
    <form className="new-task-form" onSubmit={(e) => handleSubmitClick(e)}>
      <label>
        Details
        <input type="text" 
          name="text" 
          onChange={handleChange}
          value={newTask.text}
        />
      </label>
      <label>
        Category
        <select name="category" 
          value={newTask.category}
          onChange={handleChange}
        >
          {categoriesToDisplay}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
