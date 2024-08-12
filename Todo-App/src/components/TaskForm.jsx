import React from 'react'
import { useState } from 'react';
import "./TaskForm.css";
import Tag from './Tag';
const TaskForm = ({setTasks}) => {
    const [taskData, settaskData] = useState({
        task: "",
        status: "todo",
        tags: [],
    });
    const checkTag = (tag) => {
        return taskData.tags.some(item => item === tag)
    }

    const selectTag = (tag) => {
        if(taskData.tags.some(item => item === tag)) {
            const filterTags = taskData.tags.filter(item => item !== tag)
            settaskData(prev => {
                return {...prev, tags: filterTags}
            })
        } else {
            settaskData(prev => {
                return {...prev, tags: [...prev.tags, tag]};

            })
            
        }
   };


    const handleChange = (e) => {
        const {name, value} = e.target;
        
        settaskData(prev => {
            return {...prev, [name]: value}
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(taskData);
        setTasks(prev => {
            return [...prev, taskData];
        });
        settaskData({
        task: "",
        status: "todo",
        tags: [],
        })
    }
//     const [task, setTask] = useState("");
//     const [status, setstatus] = useState("todo")
//     const handleTaskChange = e => {
//         setTask(e.target.value)
//     }
//     const handleStatusChange = e => {
// setstatus(e.target.value)
//     }
//     console.log(task)
//     console.log(status)
  return (
    <header className='app_header'>
        <form onSubmit={handleSubmit}>
            <input type='text' 
            name='task'
            value={taskData.task}
            className='task_input' placeholder='Enter your task' 
            onChange={handleChange}/>

            <div className='task_form_bottom_line'>
                <div>
                <span className='category'>Categories:</span>
                <Tag tagName="Work" selectTag={selectTag} selected = {checkTag("Work")} />
                <Tag tagName="FUN" selectTag={selectTag} selected = {checkTag("FUN")} />
                <Tag tagName="Studies" selectTag={selectTag} selected = {checkTag("Studies")} />
                <Tag tagName="Other" selectTag={selectTag} selected = {checkTag("Other")} />
                
                </div>
                <div>
                <select className='task_status'
                name='status'
                value={taskData.status}
                onChange={handleChange}>
                    <option value="todo">To do</option>
                    <option value="doing">Doing</option>
                    <option value="done">Done</option>
                    <option value="later">Later</option>
                </select>

                <button type='submit' className='task_submit' >+ Add Task</button>
                </div>
            </div>
        </form>
    </header>
  )
}

export default TaskForm
