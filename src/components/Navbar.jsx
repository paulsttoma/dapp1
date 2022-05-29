import React from "react";
import { Navbarstyle } from "./Navbar.styles";
import mySvg from '../images/dd.jpeg'
import { useState } from "react";



function Navbar() {

  const Web3 = require("web3");
  const [addr, setAddr] = useState("");

  function metamask() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable();
      window.ethereum.on("accountsChanged", function(accounts) {
        setAddr(accounts[0]);
      });
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert("Download Metamask using google chrome extension");
    }
    window.ethereum.enable()
  }

  return (
    <div>
      <Navbarstyle>
        <button onClick={metamask}> Connect Metamask </button>
        <img src={mySvg} alt="React Logo" />
        <p> Wallet Address:  {addr} </p>
      </Navbarstyle>
    </div>
  );
}

export default Navbar;
