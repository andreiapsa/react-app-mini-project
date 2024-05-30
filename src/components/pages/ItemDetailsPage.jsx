import React from 'react'
import List from '../List';
import { useParams } from 'react-router-dom';

const ItemDetailsPage = () => {
    const {taskId} = useParams();
    const TaskDetails = list.find((task) => task.id == taskId);
  return (
    <div>
        <h1>Task Details</h1>

    </div>
  )
}

export default ItemDetailsPage