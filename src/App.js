import React from "react";
import './App.css';
import Nav from './Nav';
import Shop from './Shop';
import About from './About';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from "./Footer";
import reactImage from './img/react-router.jpg';



function App(){
// s
  return(


<Router> 
  {/** React Router provides routing capabilities to single-page apps built in React*/}

    <div className="App">
      <Nav/> 
      {/** the nav component will always be there, dont want it to change. */}
      
      {/** the switch will be responsible and will make sure only one rout will show at the time  */}
    
      <Switch> 
      <Route path="/single-page-application" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/shop" component={Shop}/>
      </Switch>


    
    </div>
    </Router>
     
  )

}




const Home = () => (

<div className="homeInfo">
<br></br>
<h1> Using React Router to Optimize Single Page Applications (SPAs)
  </h1>
  <br></br> 
  <img src={reactImage} alt="react image"></img>
  
  <p>
    
  </p>
</div>

);


export default App;



