import React from 'react';
import Banner from './Banner';
import Menu from './Menu';
import styled from 'styled-components';

const S_menuBg = styled.div`
  width: 1200px;
  margin: 0 auto;
  background-image: linear-gradient(90deg, #13547a 0%, #80d0c7 100%);
  margin-top:20px;
`
function Drinks() {
  return (
    <div className="Drinks">
      <Banner img='bg_drink.jpg' slogan='DRINK'/>
      <S_menuBg>
        <Menu title='cocktail'/>
        <Menu title='whisky'/>
        <Menu title='beer'/>
      </S_menuBg>
    </div>
  );
}

export default Drinks;