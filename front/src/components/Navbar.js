import React, { useState, useEffect } from "react";
import { Button } from "./Button";
// import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo" onClick={closeMobileMenu}>
            DRAWEB.
            <i class="fab fa-typo3" />
          </div>{" "}
          DRAWEB.
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <i className="nav-links" onClick={closeMobileMenu}>
                Home
              </i>
            </li>
            <li className="nav-item">
              <i to="/" className="nav-links" onClick={closeMobileMenu}>
                Services
              </i>
            </li>
            <li className="nav-item">
              <i to="/" className="nav-links" onClick={closeMobileMenu}>
                Products
              </i>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
