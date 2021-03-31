import React from 'react';
import './App.css';

import  { Link } from 'react-router-dom';


function Nav(){
    const navStyle = {
        color: 'yellow',
    };

    return(
        <nav>
             <ul className="nav-links">
          <Link style={navStyle} to="/single-page-application">
               <li>SPA app</li>
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
