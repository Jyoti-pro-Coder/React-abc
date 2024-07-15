import React, { useState } from "react";
import Rashmi from "./08-Class-UseState";
function App(){
  const [name ,setname] =  useState("BHARDWAJ ");
  const [lname ,lsetname] =  useState("PRABHAKAR ");
  const [sub ,setsub] =  useState("BIO ");
  
    function hide(){
      setname("jai shri ram");
    }

    function show(){
      lsetname("JYOTI PRAJAPATI");
    }
  return(
    <>
    <Rashmi namme={name}  lnamee={lname} subb={sub}  />
    <button onClick={hide}>button</button>
    <button onClick={show}>button</button>
    </>
  )
}
export default App;