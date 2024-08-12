import React, {useState, useEffect} from 'react'
import "./App.css"; 
import done from './assets/done.png'
import star from './assets/star.png'
import todo from './assets/todo.png'
import later from './assets/later.png'
import TaskForm from './components/TaskForm';
import TaskColumn from './components/TaskColumn';

const oldTasks = localStorage.getItem("tasks");
console.log(oldTasks)
const  App  = () => {
    const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])
    
    const handleDelete = (taskIndex) => {
       const newTasks = tasks.filter((task, index) => index !== taskIndex) 
       setTasks(newTasks)
    }
  return (
    <div className='app'>
        <TaskForm setTasks={setTasks} />
        <main className='app_main'>
            <TaskColumn title="To do" icon={todo} tasks={tasks} 
            status="todo"
            handleDelete = {handleDelete}
            />

            <TaskColumn title="Doing" icon={star} tasks={tasks} 
            status="doing"
            handleDelete = {handleDelete}/>

            <TaskColumn title="Done" icon={done} tasks={tasks} 
            status="done"
            handleDelete = {handleDelete}/>

            <TaskColumn title="Later" icon={later} tasks={tasks} status="later"
            handleDelete = {handleDelete}/>
         
        </main>
    </div>
  )
}

export default  App