import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="logo" aria-label="Go to homepage">
        HELENA
        <span>CRUSE</span>
      </Link>

      <nav aria-label="Main navigation">
        <a href="/#work">Work</a>
        <a href="/#about">About</a>
        <a href="/#approach">Approach</a>
        <a href="/#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;
