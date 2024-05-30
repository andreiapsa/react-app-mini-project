import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className = "sidebar">
        <h1>Sidebar</h1>
    <Link to="/">
      <button>Home</button>
    </Link>
    <Link to="/about">
      <button>About Us</button>
    </Link>
    </div>
  )
}

export default Sidebar