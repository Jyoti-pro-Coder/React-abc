function Arylist(){
   const data = [
                {
                  name:"Jyoti",clss:"BA",mob:"7982092127",add:[
                                                             {Hno:"324",col:"Amar-colony",st:"Delhi"}
                                                            ]
                },
                {
                  name:"Prabhakar",clss:"BA",mob:"7982092127",add:[
                                                             {Hno:"324",col:"Amar-colony",st:"Delhi"}
                                                            ]
                },
                {
                  name:"Bhardwaj",clss:"BA",mob:"7982092127",add:[
                                                             {Hno:"324",col:"Amar-colony",st:"Delhi"}
                                                            ]
                }
                ]

  return(
    <>
    <table cellPadding={10} cellSpacing={10} border={2}>
      <tr border={2}>
        <td>Name</td>
        <td>Class</td>
        <td>Mobile No:</td>
        <td>Address
          <tr>
            <td>H.NO</td>
            <td>Colony</td>
            <td>State</td>
          </tr>
        </td>
      </tr>
      {
        data.map((X)=>
        <tr>
          <td>{X.name}</td>
          <td>{X.clss}</td>
          <td>{X.mob}</td>
          <td>{X.add.map((a)=> 
        <tr>
          <td>{a.Hno}</td>
          <td>{a.col}</td>
          <td>{a.st}</td>
          
          
        </tr>
        )}</td>
        </tr>
      )
      }
    </table>
    </>
  )
}
export default Arylist;