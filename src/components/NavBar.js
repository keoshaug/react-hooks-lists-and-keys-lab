import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (

  <nav>  
  <a href="#home" key={(links).id}>home</a>
  <a href="#about" key={(links).id}>about</a>
  <a href="#projects" key={(links).id}>projects</a>
  </nav>
  
  )
}

export default NavBar;
