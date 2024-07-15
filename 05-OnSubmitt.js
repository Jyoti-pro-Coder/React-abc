import { useState } from "react"

 export function Submitt(){
    const [fname,a] = useState("")
    const [sname,b] = useState("")
    const [clas,c] = useState("")
    function sum(s){
        s.preventDefault();
        document.write(fname,sname,clas)

    }
    return(
        <>
        <form onSubmit= { sum} >
            <input type="text" onChange={(s) => a(s.target.value)}/> 
            <br></br>
            <input type="text" onChange={(s) => b(s.target.value)}/>
            <br></br>
            
            <input type="text" onChange={(s) => c(s.target.value)}/>

            <button type="submit">CLICK ME</button>



        </form>
        </>
    )
}