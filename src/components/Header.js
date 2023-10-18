// Header.js
import React from 'react';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#courses" className="nav-link">Courses</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;