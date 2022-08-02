import React from "react";

function Hello(){
const shout = ()=>{
    alert("Heyyyyyyy")
}
    return(
        <div>
           <h1>Hello Again</h1> <button onClick={shout} > Click For Alert</button>
        </div>
    )
}

export default Hello; 