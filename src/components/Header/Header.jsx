import React from "react";
import Nav from './Nav'

const Header = () => {
  return <header className="header">
    <Nav/>
    <div>
    <span>Username</span>
    <button>Login</button>
    </div>
  </header>;

};

export default Header;