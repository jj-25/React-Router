import React from 'react';
import styled from 'styled-components';
import './App.css';
import { Link } from "react-router-dom";
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${props=>props.primary?"white":"palevioletred"};
  h2{
    color:#ff0;
  }
  // &:nth-child(2){color:#f00;}
`;
function Nav() {
  return (
    // <nav>
    //   <h3>logo</h3>
    //   <ul className="nav-links">
    //     <Link to="/about">
    //       <li>About</li>
    //     </Link>
    //     <Link to ="/shop">
    //       <li>Shop</li>
    //     </Link>
    //   </ul>
    // </nav>
    <nav className="navbar">
      <Title>Hi it is css component
        <h2>it is h2</h2>
      </Title>
      <Title primary>it is title2</Title>
      <Title>it is title3</Title>
      <ul>
        <div className="logo">
          <a href="index.html" alt="Depth_logo"><img src="logo.png"/></a>
        </div>
        <Link to="/drinks">
          <li>DRINK</li>
        </Link>
        <Link to="/food">
          <li>FOOD</li>
        </Link>
        <Link to="/live music">
          <li>LIVE MUSIC</li>
        </Link>
        <Link to="/about">
          <li>ABOUT </li>
        </Link>
        <li><p className="Title">17:00 ~ 02:00 Monday Closed</p></li>
      </ul>
    </nav>
  );
}

export default Nav;
