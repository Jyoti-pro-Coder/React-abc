import React from "react";

 export default class Shruti extends React.Component{

    constructor(){
        super();

        this.name = {
            fname: "prabhakar",
            lname:"bhardwaj",
            classs:"12th",
            subject:"Bio",
        }
    }
    render(){
        return(
            <>
            <h1>{this.name.fname}</h1>
            <h1>{this.name.lname}</h1>
            <h1>{this.name.classs}</h1>
            <h1>{this.name.subject}</h1>
            </>
        )
    }


}
