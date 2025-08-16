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
  return (
    <>
    <div id="app">
      <div id="task-form-container">
        <TaskForm create={createTask} />
      </div>
      <TaskList tasks={tasks} />
    </div>
    </>
  )
}

export default App
