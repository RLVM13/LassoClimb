import React from "react";
import Nav from './Nav'

const Header = () => {
  const handleClick = () => {
    alert("Registrar Usuario");
  }

  return <header className="header">
    <Nav />
    <div>
      <span>Username</span>
      <button onClick={handleClick}>Login</button>
    </div>
  </header>;

};

export default Header;