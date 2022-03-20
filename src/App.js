import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const [tasks, setTasks] = useState([])

  // add task (verified)
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task} 
    setTasks([...tasks, newTask])
  }
  // delete task (verified)
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id != id))
  }

  // getTasks (from server) 
  const fetchTasks = async () => {
    const res = await fetch(`http://localhost:3000/posts`)
    const data = await res.json()
    return data
  }
  const getTasks = async () => {
    const tasksFromServer = await fetchTasks()
    setTasks(tasksFromServer)
  }
  useEffect(() => getTasks(),[])
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
