
import { Route, Routes } from "react-router-dom";
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import List from './components/List'
import DashboardPage from './pages/DashboardPage'
import ItemDetailsPage from './pages/ItemDetailsPage'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {

  return (    
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<DashboardPage/>}/>
        <Route path="/details/:taskId" element={<ItemDetailsPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
      <Sidebar/>
      <Footer/>
    </>
  )
}

export default App