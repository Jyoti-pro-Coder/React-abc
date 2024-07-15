// import { useState } from "react";

// export function Conditionn(){
//     let [cond,setCond] = useState(true);
//     return(
//         <>
//         {
//             cond ? <h1>JYOTI RANI</h1> : <h2>bhardwaj prabhkar</h2>
//         }
//         </>
//     )
// }

import React, { useState } from 'react'

export default function Conditionn() {
    const [lname, lm] = useState(false);
  return (
    <div>
      {
        lname ? <h1>Jyoti</h1> : <h1>Prabhakar</h1>
      }
    </div>
  )
}

