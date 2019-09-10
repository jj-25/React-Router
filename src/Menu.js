import React from 'react';
import styled from 'styled-components';
const S_drinkBox = styled.div`
	.col-3x{display:inline-block; width: 20%;}
  .col-3y{width: 26.666666%;}
  display:flex;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  h2{
    padding: 20px 0px;
    width:100%;
    text-align:center;
    color: #e8bc35;
    font-size: 50px;
    letter-spacing: 2px;
    margin-bottom: 10px;
  }
  .DrinkMenuImg{
    
  }
`
const Menu = () =>{
  return(
    <S_drinkBox>
      {/* <!------------cocktail------------->	 */}
      <h2>Cocktails</h2>
      <div class="col-3x">
        <div class="DrinkMenu DrinkMenuImg">
          <img class="cock_img"src="cocktail_7_1000x1000.png" alt=""/>
        </div>
      </div>
      <div class="col-3y">
      <div class="DrinkMenu">
        <div class="hover_box cock1">
        <p class="name">Colitan</p>
        <p class="price">$350</p>
        <p class="content">Shaken berry & lime juice</p>
        </div>
        <div class="hover_box cock2">
        <p class="name">Mojito</p>
        <p class="price">$300</p>
        <p class="content">Gin & soda & lorem</p>
        </div>
        <div class="hover_box cock3">
        <p class="name">Whisky Sour</p>
        <p class="price">$450</p>
        <p class="content">Lemon & Whisky & lorem</p>
        </div>
      </div>
      </div>
      <div class="col-3y">
      <div class="DrinkMenu">
        <div class="hover_box cock4">
        <p class="name">Daiquiri</p>
        <p class="price">$550</p>
        <p class="content">Berry & lime & lorem</p>
        </div>
        <div class="hover_box cock5">
        <p class="name">Tom Collins</p>
        <p class="price">$500</p>
        <p class="content">Lime & muddled & lorem</p>
        </div>
        <div class="hover_box cock6">
        <p class="name">Archangel</p>
        <p class="price">$550</p>
        <p class="content">Butterfly & berry & lorem</p>
        </div>
      </div>
      </div>
      <div class="col-3y">
      <div class="DrinkMenu">
        <div class="hover_box cock7">
        <p class="name">Perfect Storm</p>
        <p class="price">$550</p>
        <p class="content">Lime juice & ginger</p>
        </div>
        <div class="hover_box cock8">
        <p class="name">Yager Rock</p>
        <p class="price">$550</p>
        <p class="content">Redbull & yager & lorem</p>
        </div>
        <div class="hover_box cock9">
        <p class="name">R Bee</p>
        <p class="price">$&nbsp80</p>
        <p class="content">Whisbih & soda & med</p>
        </div>
      </div>
      </div>
    </S_drinkBox>
  )
}
export default Menu;
