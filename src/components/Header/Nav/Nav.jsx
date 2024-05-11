import { Link } from 'react-router-dom'
import React from "react";

const Nav = () => {
  return <nav>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/climblist'>Climb List</Link></li>
      <li><Link to='/motivacion'>Motivación</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      {/* <li><Link to='/staff'>Staff</Link></li>
      <li><Link to='/summer'>SummerCourse</Link></li>
      <li><Link to='/topic'>Topic</Link></li> */}
    </ul>
  </nav>;
};

export default Nav;