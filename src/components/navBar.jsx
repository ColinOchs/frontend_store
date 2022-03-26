import "./navBar.css";
import { Link } from "react-router-dom";

const NavBar  = () => {
    

    return (<nav className="navbar navbar-expand-lg navbar-light">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <Link className="navbar-brand" to="/home">Cobblestone Studio</Link>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/catalog">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/about">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/cart">Shopping Cart 🛒</Link>
          </li>
        </ul>
        
      </div>
      <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button className="btn btn-outline-info" type="submit">Search</button>
        </form>
    </div>
    
  </nav>)};

export default NavBar;

