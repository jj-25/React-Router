import React from 'react';
import styled from 'styled-components';
const Menu = (props) =>{
  const { title } = props
  return(
    <S_drinkBox>
      {/* <!------------cocktail------------->	 */}
      <h2>{title}</h2>
      <div class="col-3x">
        <div class="DrinkMenu DrinkMenuImg">
          <img class="cock_img"src={`${title}.png`} alt=""/>
        </div>
      </div>
      <div class="col-3y">
      <div class="DrinkMenu">
        <div class="menu-item cock1">
        <p class="name">Colitan</p>
        <p class="price">$350</p>
        <p class="content">Shaken berry & lime juice</p>
        </div>
        <div class="menu-item cock2">
        <p class="name">Mojito</p>
        <p class="price">$300</p>
        <p class="content">Gin & soda & lorem</p>
        </div>
        <div class="menu-item cock3">
        <p class="name">Whisky Sour</p>
        <p class="price">$450</p>
        <p class="content">Lemon & Whisky & lorem</p>
        </div>
      </div>
      </div>
      <div class="col-3y">
      <div class="DrinkMenu">
        <div class="menu-item cock4">
        <p class="name">Daiquiri</p>
        <p class="price">$550</p>
        <p class="content">Berry & lime & lorem</p>
        </div>
        <div class="menu-item cock5">
        <p class="name">Tom Collins</p>
        <p class="price">$500</p>
        <p class="content">Lime & muddled & lorem</p>
        </div>
        <div class="menu-item cock6">
        <p class="name">Archangel</p>
        <p class="price">$550</p>
        <p class="content">Butterfly & berry & lorem</p>
        </div>
      </div>
      </div>
      <div class="col-3y">
      <div class="DrinkMenu">
        <div class="menu-item cock7">
        <p class="name">Perfect Storm</p>
        <p class="price">$550</p>
        <p class="content">Lime juice & ginger</p>
        </div>
        <div class="menu-item cock8">
        <p class="name">Yager Rock</p>
        <p class="price">$550</p>
        <p class="content">Redbull & yager & lorem</p>
        </div>
        <div class="menu-item cock9">
        <p class="name">R Bee</p>
        <p class="price">$ 80</p>
        <p class="content">Whisbih & soda & med</p>
        </div>
      </div>
      </div>
    </S_drinkBox>
  )
}
const S_drinkBox = styled.div`
// *{outline:1px solid #f00;}
.col-3x{width: 20%;}
.col-3y{width: 26.666666%;}
  display:flex;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding:30px;
  border-bottom: 5px dashed #bbb;
  &:last-child{
    border:none;
  }
  h2{
    padding: 20px 0px;
    width:100%;
    text-align:center;
    color: #e8bc35;
    font-size: 50px;
    letter-spacing: 2px;
    text-transform: capitalize;
  }
  .DrinkMenuImg{
    height: 230px;
    margin-bottom: 30px;
    img{width: 90%;}
  }
  .DrinkMenu{
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    .menu-item{
      display: flex;
      flex-wrap: wrap;
      font-size :20px
      padding-bottom:10px;
      .name,.price{
        width:60%
        font-size :24px;
        font-weight:700;
        text-shadow: 1px 1px 2px #000;
        color: #fff;
        padding-bottom:10px;
      }
      .price{width:40%}
    }
  }
`
export default Menu;
