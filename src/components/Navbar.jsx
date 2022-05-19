import React from "react";
let Logo = require("../images/eth.png")


function Navbar() {
  return (
    <div>
      <header>
          <img className="logo" src={Logo} alt="logo" />
        <nav>
          <ul className="nav_link">
            <li><a href="www.Etherscan.io">Etherscan</a></li>
            <li><a href="www.twitter.com">Twitter</a></li>
            <li><a href="www.youtube.com">Whitepaper</a></li>
            <li><a href="www.opensea.io">Opensea</a></li>
          </ul>
        </nav>
        <a className="" href="www.google.com"><button>Mint</button></a>
      </header>
    </div>
  );
}

export default Navbar;
