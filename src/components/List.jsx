import React, { useState } from 'react'
import ToDoListJson from "../assets/to-do-list.json"
import { Link } from 'react-router-dom';

const List = () => {
    const [list, setList] = useState(ToDoListJson)
    const [task, setTask] = useState("");
    const [completed, setCompleted] = useState("");

    function handleAddTask(event){
      event.preventDefault()
    }


function handleTaskCompleted(taskId){
  const updatedList = list.map((aTask)=>{
    if(aTask.id === taskId){
      aTask.completed = true
    } 
    return aTask
  })
  setList(updatedList)
}
function handleTaskDelete(taskId){
  const filteredList = list.filter((aTask)=>{
    if(aTask.id === taskId){
      return false
    } else{
      return true
    }
  })
  setList(filteredList)
}
  return (
    <div>
      {list.map((oneList)=>{
        return (
         <div key={oneList.id} className='list-card'>
          <h3>{oneList.task}</h3>
          {oneList.completed === true ? 
          <h3>✅</h3> : <h3>❌</h3>}
          <p>{oneList.completed}</p>
          <button onClick={() => {handleTaskCompleted(oneList.id)}}>Done</button>
          <button onClick={() => {handleTaskDelete(oneList.id)}}>Delete</button>
          <Link to={`/details/${oneList.id}`}>
            <button>
            Check Task Details
            </button>
            </Link>
          </div>
          
        )

      
})}
 </div>
  )
}

export default List