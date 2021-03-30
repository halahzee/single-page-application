import React, { useState, useEffect } from 'react';
import './App.css';
import {link} from 'react-router-dom';


function Shop(){

useEffect(() => {
    fetchItem();
}, ([]));

const [items, setItems] = useState([]);


const fetchItem = async() => {
    const data = await fetch 
    ("https://datausa.io/api/data?drilldowns=Nation&measures=Population");

    const items = await data.json();
    console.log(items.data);
    setItems(items.data);
};


    return(
        <div className="shopInfo">
  
<br></br>
        <h2> United State Population</h2>
        <div >
            {items.map(item =>(
               <div className="infoPage">
                
                  <h3>
                  {item.Nation}
                </h3>
                
                 <h4>
                  {item.Year}
                  </h4>
                  
                  <h4>
                  {item.Population}
                  </h4>
                  <br></br> 
            
                 
              </div>
            ))}
        </div>
        
     </div>
    );
}

export default Shop;
