import React, { useState, useEffect } from 'react';
import './App.css';

function About(){

useEffect(() => {
    fetchItem();
}, ([]));

const [item, setItem] = useState([]);


const fetchItem = async() => {
    const data = await fetch 
    ("https://official-joke-api.appspot.com/jokes/ten");

    const item = await data.json();    
    console.log(item);
   setItem(item);
};


    return(
        <div className="aboutInfo">
            
            <h2>Random jokes</h2><br></br>
             {item.map(item =>(
                 <h3>
                {item.setup}<br></br>
                {item.punchline}<br></br>
         
               
                
                 </h3>
           
        
             ))}
     </div>
    );
}

export default About;




















