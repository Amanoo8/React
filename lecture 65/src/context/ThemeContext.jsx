import { createContext } from "react";
import { useState } from "react";
import { use } from "react";

 export let ThemeContext =createContext(null);

 export function ThemeProvider({children}){
    let [theme ,setTheme]=useState("light");
     return <ThemeContext value={{theme,setTheme}}>{children}</ThemeContext>;
 }
