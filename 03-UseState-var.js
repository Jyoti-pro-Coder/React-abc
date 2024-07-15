import { useState } from "react";

function Use(){
    
    const [lname,setlname] =useState("BHARDWAJ");  //bhardwaj ek default value ki tarah bhi smjh sakte hai //
    
    function b(){
        setlname("TWINKLE-PRAJAPATI");
        

    }
    return(
        <>
        
        <h1>{lname}</h1>
        
        <button onClick={b}>BBBBB</button>
        </>
    )

}
export default Use;


