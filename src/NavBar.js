import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./NavBar.css";
import "./index.css";

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <nav className="nav">
      <h1 className="site-title">Man's BFF</h1>

      <ul className={click ? "nav-list active" : "nav-list"}>
        <li className="navlink">
          <Link to="/">Home</Link>
        </li>

        <li className="navlink">
          <Link to="/leaderboard">Leaderboard</Link>
        </li>

        <li className="navlink">
          <Link to="/Dashboard">Dashboard</Link>
        </li>
      </ul>

      <div className="hamburger" onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default NavBar;
