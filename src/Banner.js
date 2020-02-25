import React from "react";
import styled from "styled-components";

const S_Banner = styled.div`
  float: ${props => props.float?'left':''};
  width: 100%;
  height: 70vh;
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center center;
  position: relative;
`
const S_Slogan = styled.div`
  position: absolute;
  width: 208px;
  height: 58px;
  bottom: 50%;
  right: 50%;
  margin-right: -104px;
  margin-bottom: -29px;
  background: -webkit-linear-gradient(90deg,yellow,red);
  z-index: 1;
  opacity: 0.8;
  border-radius: 3px;
  div{
    position: absolute;
    width: 200px;
    height: 50px;
    line-height: 50px;
    z-index: 2;
    background-color: #000;
    text-align: center;
    font-size: 40px;
    letter-spacing:3px;
    bottom: 50%;
    right: 50%;
    margin-right: -100px;
    margin-bottom: -25px;
    opacity: 1;
    border-radius: 3px;
    h1{color:#fff;}
  }
`
const Banner = (props) =>{
  const { img , slogan } = props
  return(
    <S_Banner url={img} float={!slogan}>
      {slogan?
        <S_Slogan>
          <div>
            <h1>{slogan}</h1>
          </div>
        </S_Slogan>
      :null}
    </S_Banner>
  )
}

export default Banner;