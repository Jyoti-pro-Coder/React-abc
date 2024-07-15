function Arryy(){
    const Jyoti =["jYOTI" , "PRAJAPATI" , "BHARDWAJ" ,"PRABHAKAR" , ] ;
        console.log(Jyoti[0])
        console.log(Jyoti[1])
        console.log(Jyoti[2])
        console.log(Jyoti[3])
    return(
      <>
      {
        Jyoti.map((x)=>
        <h1>{x}</h1>
    )
      }
      </>
    )
}
export default Arryy;  