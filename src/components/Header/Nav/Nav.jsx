import { Link } from 'react-router-dom'
import React from "react";

const Nav = () => {
  return <nav className="nav">
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/climblist'>Vías</Link></li>
      <li><Link to='/motivacion'>Motivación</Link></li>
      {/* <li><Link to='/about'>About</Link></li> */}
      <li><Link to='/contact'>Contact</Link></li>
    </ul>
  </nav>;
};

export default Nav;