
import React from "react";
class Parent extends React.Component{
    constructor(){
        super();
        this.state= {Value : true};
    }
    render(){
        return(
            <>
            <h2>{this.state.Value}</h2>
            {
                this.state.Value ? <h1>Jyoti</h1> : <h1>Prabhakar</h1>
            }
            <button onClick={()=> this.setState({Value: !this.state.Value})}>HEllo</button>
            </>
        )
    }
} 
export default Parent; 