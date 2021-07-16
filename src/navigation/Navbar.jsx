import { NavLink } from "react-router-dom"

const Navbar=()=>{
return (
  <nav className="navbar">
    <h2><NavLink to="/"  exact>ujjawal kapoor</NavLink></h2>
    <ul>
      <li><NavLink to="/" className="navlink" exact>Home</NavLink></li>
      <li><NavLink to="/service" className="navlink" exact>Service</NavLink></li>
      <li><NavLink to="/about" className="navlink" exact>About</NavLink></li>
      <li><NavLink to="/contact" className="navlink" exact>Contact</NavLink></li>
    </ul>
  </nav>
)
}

export default Navbar;