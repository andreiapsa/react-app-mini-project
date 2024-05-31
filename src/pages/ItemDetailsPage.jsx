import React from 'react'
import List from '../components/List';
import { useParams } from 'react-router-dom';
import ToDoListJson from "../assets/to-do-list.json"

const ItemDetailsPage = () => {
    const myParams = useParams()
    const taskId = myParams.taskId
    const TaskDetails = ToDoListJson.find((task) => task.id === taskId);
  return (
    <div>
        <h1>Task Details</h1>
        <div className="taskdetails">
        </div>
    </div>
  )
}

export default ItemDetailsPage