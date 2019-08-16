import React,{ useState ,useEffect } from 'react';
import './App.css';
import { Link } from "react-router-dom";

function Shop() {
  const [items,setItems] = useState([]);
  useEffect(()=>{
    getItem();
  },[])
  const getItem = async() =>{
    const APP_ID = 'f0c20d5f';
    const APP_KEY = '0acbc34b99170b700ce1903b87b4b1db';
    const res = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
    const data = await res.json();
    setItems(data.hits)
    console.log(data)
  }
  return (
    <div className="Shop">
      <h1>Shop</h1>
      {items.map(item=>
        <h2 key={item.recipe.label}>
          <Link to={`/shop/${item.recipe.label}`}>{item.recipe.label}</Link>
        </h2>  
      )}
    </div>
  );
}

export default Shop;
