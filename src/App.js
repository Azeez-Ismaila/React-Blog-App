import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* <Home /> */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

// const sayhello = ()=>{
//     console.log("Hello")
//   }
//   const [users,setUsers] = useState([
//     {name:"Ajodo",message:"I am a baller"},
//     {name:"Khal",message:"I made it in frontend"},
//     {name: "James", message:"I made it in Blockchain"},
//     {name:"Izzy",message:"I made it in QA"}
//   ])
//   return (
//     <div className="app">

//       {users.map(user =>(<Tweet
//       name={user.name} message={user.message}/>))}

//       <a href="http://google.com" target={"_blank"}>click</a>
//     {/* <h1>Hello World</h1>
//  <button onClick={sayhello}>CLick to say Hello</button>
// <Hello></Hello> */}
// {/* <Tweet name="Azeez" message="I am learning React"/>
// <Tweet name="zyzman" message="I love money"/>
// <Tweet name="Seun" message="I do not care"/>
// <Tweet name="Sodik" message="Now i can relate to props"/> */}
// </div>
