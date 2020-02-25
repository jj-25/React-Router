import React,{ useState ,useEffect } from 'react';
import { Link } from "react-router-dom";

function Item({match}) {
  return (
    <div className="Item">
      <h1>{match.params.id}</h1>
    </div>
  );
}

export default Item;
