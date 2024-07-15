//   function Events(){
//     return(
//         <>
//         <button onClick={sum}>CLICK</button>
//         <button onClick={()=> alert("JAI JAI SHRI RAM")}>RAM</button>
//         </>
//     )
//     function sum(){
//         alert("Hi I AM TWINKLE")
//     }
// }

// export default Events;
import React from 'react'

export default function Events() {
  return (
    <div>
      <button onClick={show}>Click Me</button>
      <button onClick={()=>alert("hello")}>Hey</button>
    </div>
  )
  function show(){
    alert("Hi I'm Twinkle")
  }
}

