import React from "react";
import './App.css';
import Nav from './Nav';
import Shop from './Shop';
import About from './About';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from "./Footer";



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
      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/shop" component={Shop}/>
      </Switch>


      <Footer />
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

  <h3>Welcome to the Home Page</h3>
 
  <p>
    <h4>
      Go to the Shop page and the about page to find some information!!
    </h4>
  </p>
</div>

);


export default App;



