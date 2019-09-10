import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <S_Nav>
      <ul>
        <div className="logo">
          <Link to="/"><img src="logo.png"/></Link>
        </div>
        <Link to="/drink">
          <li>DRINK</li>
        </Link>
        <Link to="/food">
          <li>FOOD</li>
        </Link>
        <Link to="/livemusic">
          <li>LIVE MUSIC</li>
        </Link>
        <Link to="/about">
          <li>ABOUT </li>
        </Link>
        <li><p className="Title">17:00 ~ 02:00 Monday Closed</p></li>
      </ul>
    </S_Nav>
  );
}

const S_Nav = styled.nav`
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
  background:-webkit-linear-gradient(135deg,rgba(50,50,50,0.7),rgba(10,10,10, 0.5)); 
  padding:10px 0;
  ul{
    width: 80%;
    margin:auto;
    // font-size: 0;
    display: flex;
    align-items:center;
    justify-content: space-around;
    a,p{
      color:#fff;
      text-decoration:none;
    }
    a{
      font-size:18px;
      text-shadow: 1px 1px 20px #f3d991;
      :hover li{color:#e8bc35;}
    }
  }
`
export default Nav;
