import React from 'react';
import './App.css';

import  { Link } from 'react-router-dom';


function Nav(){
    const navStyle = {
        color: 'yellow',
    };

    return(
        <nav>
           <h3>Logo</h3> 
           <ul className="nav-links">
           <Link style={navStyle} exact to="/"> 
               <li>Home</li>
               </Link> 
               
               <Link style={navStyle} to="/shop">
               <li>Shop</li>
               </Link>
               
               <Link style={navStyle}  to="/about"> 
               <li>About</li>
               </Link> 

              
           </ul>
        </nav>
    );
}

export default Nav;
