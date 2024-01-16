import { Link } from "react-router-dom";
import '../styles/navbar.css'
const Navbar = () =>{
    return(
        <nav className="navbar">
            <h4>Home</h4>
            <div className="links">
                <Link to="/login" className="login">Login</Link>
            </div>
        </nav>
    )
}

export default Navbar;