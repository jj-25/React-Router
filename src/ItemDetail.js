import React,{ useState ,useEffect } from 'react';
import './App.css';
import { Link } from "react-router-dom";

function Item({match}) {
  const [item,setItem] = useState([]);
  useEffect(()=>{
    console.log(match)
  },[])
  return (
    <div className="Item">
      <h1>{match.params.id}</h1>
    </div>
  );
}

export default Item;
