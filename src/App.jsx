
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import ToDoListJson from "../src/assets/to-do-list.json"
import { useState } from 'react'

function App() {
const [list, setList] = useState(ToDoListJson)
  return (    
    <>
  <Navbar />

    <div>
      {list.map((oneList)=>{
        return (
          <div key={oneList.id} className='list-card'>
          <h3>{oneList.task}</h3>
          <p>{oneList.completed}</p>
          </div>
        )
      
})}
 </div>
    
      
      <Sidebar />
      <Footer />
    </>
  )
}

export default App
