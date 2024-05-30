import React from 'react'
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
    const nav = useNavigate();
    function handleNavigate() {
      nav("/");
    }
  return (
    <div>
      <h1>404 NotFound</h1>
      <h3>You can always go to the Homepage</h3>
      <button onClick={handleNavigate}>Home</button>
    </div>
  )
}

export default NotFoundPage