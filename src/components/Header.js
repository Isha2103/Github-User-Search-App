import React from "react";
import MoonIcon from "../images/icon-moon.svg";

function Header(props) {
  return (
    <header>
      <h1 className="header--title">devfinder</h1>
     <img className="icon-dark"src={MoonIcon} alt="" onClick={themeToggle}/>
    </header>
  );
}

function themeToggle(){
  const btn = document.querySelector('.icon-dark'); 
  btn.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');  
  })
}
export default Header;
