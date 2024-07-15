import React from "react";
class Should extends React.Component{
    constructor(){
        super();
        this.state = {Value: 1}
    }
    render(){
        return(
            <>
            <h1>{this.state.Value}</h1>
            <button onClick={()=> this.setState({Value:  this.state.Value+2})}>Value-Change</button>
            </>
        )
    }
}
export default Should;