import React from "react";
import { use } from "react";
import { ThemeContext } from "../context/ThemeContext";
function Navbar(){
  const {theme} =use(ThemeContext);
  return <p>{theme}</p>;
}
export default Navbar;