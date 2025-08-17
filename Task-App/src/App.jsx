import { useState } from 'react';
import './App.css'
import TaskForm from './Components/TaskForm'
import TaskList from './Components/TaskList';


function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = (title, description, important) => {
    setTasks([...tasks, {
      id: Math.ceil(Math.random() * 9999),
      //title : title,
      //description : description,
      //important : important
      title,
      description ,
      important 
    }]);
    console.log(tasks);
  }

  function deleteTask(id) {
    const deletedAfterTasks = tasks.filter((task) => task.id !== id);
    setTasks(deletedAfterTasks);
  }

  const updateTask = (id, title, description, important) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, title , description, important };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <>
    <div id="app">
      <div id="task-form-container">
        <TaskForm create={createTask}/>
      </div>
      <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask}/>
    </div>
    </>
  )
}

export default App
