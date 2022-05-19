import React from "react";
let Logo = require("../images/ss.png")



function Navbar() {
  return (
    <div>
      <header>
          <img className="logo" src={Logo} alt="logo" />
        <nav>
          <ul className="nav_link">
            <li><a href="www.google.com">Etherscan</a></li>
            <li><a href="www.google.com">Twitter</a></li>
            <li><a href="www.google.com">Whitepaper</a></li>
            <li><a href="www.google.com">Opensea</a></li>
          </ul>
        </nav>
        <a className="" href="www.google.com"><button>Mint</button></a>
      </header>
    </div>
  );
}

export default Navbar;
