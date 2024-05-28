import logo from "../assets/images/aa-app-logo.png"
const Navbar = () => {
    return (
        <div className="navbar">
         <img src={logo} alt="aa app" style={{ height: "80%" }} />
          <h4> AA app</h4> 
        </div>
      );
    }

export default Navbar