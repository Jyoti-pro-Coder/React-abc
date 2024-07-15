import React from "react";
class Mm extends React.Component{
    constructor(){
        super();
         this.state = {name:"Jyoti"};

    }
    render(){
        return(
             <>
             <h2>{this.state.name}</h2>
             <button onClick={()=> this.setState({name:"Bhardwaj"})}>Button</button>
             </>
        )
    }
}
export default Mm;
