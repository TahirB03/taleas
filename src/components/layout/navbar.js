import { Link } from "react-router-dom";
import './navbar.css'

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav navbar ">
          <li class="nav-item active ">
            <Link class="nav-link" to="/">
              Home
            </Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" to="/about">
              About
            </Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" to="/contact">
              Contact
            </Link>
          </li>
          <li class="btn btn-outline-info btn-sm lastItem">
            <Link class="nav-link" to="/addUser">
              Add User
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
