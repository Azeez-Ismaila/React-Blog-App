import React,{useState} from "react";

function Tweet(props){
    // const [isRed, setRed] =useState(false)
    // const [count,setCount] = useState(0)
    // const Increment = ()=>{
    //     setCount(count + 1)
    //     setRed(!isRed)
    // }
    return(
        <div className="tweet">
            {/* <button onClick={Increment}>Increment</button>
            <h1>{count}</h1>
            <h1 className={isRed ? 'changeColor' : ''}>I am Dynamic</h1> */}
            <h2>Welcome to twitter</h2>
   <h3>Hello {props.name}</h3>
   <h3>{props.message}</h3>
   <h3>3k Likes</h3>
        </div>
    )
}

export default Tweet;