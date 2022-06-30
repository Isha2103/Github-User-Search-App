import React from "react";
import MoonIcon from "../images/icon-moon.svg";
import SunIcon from "../images/icon-sun.svg";

function Header(props) {
  return (
    <header>
      <h1 className="header--title">devfinder</h1>
      <div className="icon-dark" onClick={themeToggle}>
        <span id="change-theme-name">DARK</span>
        <img class="toggle-icon-moon" src={MoonIcon} alt=""/>
        <img class="toggle-icon-sun" src={SunIcon} alt=""/>
     </div>
    </header>
  );
}

function themeToggle(){
  const btn = document.querySelector('.icon-dark'); 
  var x = document.getElementById("change-theme-name");
  btn.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    if (x.innerHTML === "DARK") {
      x.innerHTML = "LIGHT";
    } else {
      x.innerHTML = "DARK";
    }
  })

}

export default Header;