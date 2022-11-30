import "./App.css";
import React from "react";
import MyContext from "./Mycontext";
import Custom from './Custom'
import Middle from './Middle'

const App = () => {
  
  const [theme,handler] = Custom();
  
  return (
    <MyContext.Provider value={{ theme, handler }}>
        <Middle/>
    </MyContext.Provider>
  )
}
export default App