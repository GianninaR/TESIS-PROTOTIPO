import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>TESIS PRUEBA WEB</h1>
      <div className="links">
        <Link to="/">VIDEOS</Link>
       
      </div>
    </nav>
  );
}
 
export default Navbar;