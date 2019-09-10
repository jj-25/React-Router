import React from 'react';
import Nav from "./Nav";
import About from "./About";
import Drinks from "./Drinks";
import Food from "./Food";
import LiveMusic from "./LiveMusic";
import Banner from "./Banner";
import ReactSwipe from 'react-swipe';
import { BrowserRouter as Router , Switch ,Route, Link } from 'react-router-dom';
import styled,{ createGlobalStyle } from 'styled-components'

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Nav />
      <Switch>
        <Route path ="/" exact component={Home}/>
        <Route path ="/drink" component={Drinks}/>
        <Route path ="/food"  component={Food}/>
        <Route path ="/livemusic" component={LiveMusic}/>
        <Route path ="/about"  component={About}/>
      </Switch>
      <S_footer>
        <p>Tel:78-978-7878 Address:580 Cherry St, Macon,GA</p>
        <p>Copyright©2018 Depth All right reserved</p>
      </S_footer>
    </Router>
  );
};
const Home = () =>{
  let reactSwipeEl;
  return(
    <div>
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: true }}
        ref={el => (reactSwipeEl = el)}
      >
        <Banner img="bg_index.png"/>
        <Banner img="bg_about.jpg"/>
        <Banner img="bg_food.jpg"/>
      </ReactSwipe>
      <div className="swipe">
        <button onClick={() => reactSwipeEl.prev()}>></button>
        <button onClick={() => reactSwipeEl.next()}>></button>
      </div>
      <S_Box>
        {/* <!------------whisky-------------> */}
        <div className="box_Whisky">
          <div className="whisky_word">
              <h3>Whisky</h3>
              <p>Using the pure water source of the Snow Mountain Range to create a smooth and mellow wine.</p>
              <Link to="/drink">Menu ></Link>
          </div>
          <div className="whisky_img fade_right">
            <img src="whisky.png"/>
          </div>
        </div>
      </S_Box>
      <S_Box>
        <div className="Home_beer_cock">
          <div className="beer_img fade_left">
            <img src="beer.png" alt="beer"/>	
          </div>
          <div className="beer_word">
            <h3>Beer</h3>
            <p>We Selection 9 classic Beer and this beer as cold as your ex-girlfriends.</p>
            <Link to="/drink">Menu ></Link>
          </div>
          <div className="cocktail_img fade_left">
            <img src="cocktail_125.png" alt="cocktail"/>	
          </div>
          <div className="cocktail_word">
            <h3>Cocktail</h3>
            <p>Old fashioned, and daiquiri will simply never go out of style. Here are 9 of the best ones to order at bar.</p>
            <Link to="/drink">Menu ></Link>
          </div>
        </div>		
      </S_Box>
      <S_Box>
      {/* <!------------bartender-------------> */}
        <div className="Home_Bartender">
          <h2>Our Bartender</h2>
          <div className="line">
            <div className="bartender ph1">
              <img src="bartender-p1.jpg" alt="bartender"/>
              <span>Ashely
              <p>5 years of experience</p>
              </span>
            </div>
            <div className="bartender ph2">
              <img src="bartender-p2.jpg" alt="bartender"/>
              <span>George 
              <p>10 years of experience</p>
              </span>
            </div>
            <div className="bartender ph3">
              <img src="bartender-p3.jpg" alt="bartender"/>
              <span>Emma
                <p>6 years of experience</p>
              </span>
            </div>
            <div className="word">
              <p>Bartenders are rigorously trained and have professional bartending techniques.</p>
            </div>
            <Link to="/about">
              Know about us >
            </Link>
          </div>
        </div>
      </S_Box>
      <div className="bg_Home_Live">
        <S_Box>
          {/* <!------------live music-------------> */}
          <div className="bg_Home_Live">
            <div className="box Home_Live">
            <h2>Live Music</h2>
              <div className="liveBand_img">
                <img src="live_band.jpg" alt="liveband"/>
              </div>
              <div className="liveBand_word">
                <p>The Depth every weekend nights courtesy of hippest gigter promoters Eat Your Own Ears and Heart.</p>
                <Link to="/livemusic">Schedule ></Link>
              </div>
            </div>
          </div>
        </S_Box>
      </div>
      <S_Box>
      {/* <!------------map-------------> */}
          <h2>Contact Us</h2>
        <div className="Home_contact">
          <div className="Address_box">
            <div className="Address">
            <p>Tel : 78-978-7878</p>
            <p>E-mail : depth_bar@gmail.com</p>
            <p>Address : 580 Cherry St, Macon, GA 31201,USA</p>
            <p>Opening : 5:00 p.m. to 2:00 a.m.</p>
            <p>Closed Monday</p>
            </div>
            <div className="icon">
            <a className="icon_s" href=""><img src="facebook.png" alt="facebook"/></a>
            <a className="icon_s" href=""><img src="twitter.png" alt="twitter"/></a>
            <a className="icon_s" href=""><img src="instagram.png" alt="instagram"/></a>
            </div>
          </div>
          <div className="Map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.3445966141358!2d-83.63102498517186!3d32.836126588277175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f3fe7b6f07cf0b%3A0xd49dd48b775753ee!2zNTgwIENoZXJyeSBTdCwgTWFjb24sIEdBIDMxMjAx576O5ZyL!5e0!3m2!1szh-TW!2stw!4v1540022034698" width="600" height="300" frameborder="0" allowfullscreen></iframe>
          </div>	
        </div>
      </S_Box>
    </div>
  )
}
const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    background: rgb(29, 31, 39);
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  *{ color:#eee; }
  img{ width:100%; vertical-align: bottom;}
  a{ text-decoration: none; }
  p{ letter-spacing: 1px;}
  .swipe{
    position:absolute;
    top:30%
    width:100%;
    display:flex;
    justify-content: space-between;
    button{
      cursor:pointer;
      outline:none;
      font-size: 100px;
      border:none;
      color:#fff;
      background:transparent;
      &:first-child{
        transform: rotateY(180deg);
      }
    }
  }
  .bg_Home_Live{
    width: 100%;
    height: 500px;
    margin-top: 250px;
    position: relative;
    background-image: url(livemusic_bg_dark.jpg);
    background-size: cover;
    background-attachment: fixed;
  }
`
const S_Box = styled.div`
  position:relative;
  width:1200px;
  margin:0 auto;
  p,a{ font-size:20px; }
  a {
    color: #f3d991;
    letter-spacing: 2px;
  }
  h2{
    color: #e8bc35;
    font-size: 50px;
    text-align: center;
    letter-spacing: 2px;
    padding: 50px 0px;
  }
  h3{ 
    font-size:66px; 
    color:#fff ;
    letter-spacing: 5px;
  }
  .box_Whisky{
    display: flex;
    justify-content: space-evenly;
    padding-top: 100px;
    .whisky_word{
      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      text-align: center;
      width: 40%;
      z-index: 1;
      &:after{
        content:'';
        display:block;
        width: 220px;
        height: 220px;
        transform:scaleX(1.3) rotate(45deg);
        border:5px solid rgba(240, 124, 4, 0.8);
        position: absolute;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
        margin:auto;
        z-index: -1;
        box-shadow:0px 0px 15px 5px red;
        animation:  20s linear infinite;
      }
      p{
        margin-top: 20px;
        line-height: 40px;
        z-index: 1;
      }
      a{
        padding: 10px 10px;
        display: inline-block;
        position: relative;
      }
    }
    .whisky_img{
      width: 25%;
      // opacity: 0;
    }
  }
  .Home_beer_cock{
    width: 100%;
    height: 500px;
    background: url(bg02_mix_1265x450.png) no-repeat;
    background-position: center bottom;
    margin-top: 0px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    h3{ text-align: left;}
    p{
      height: 200px;
      line-height: 40px;
      padding-top: 30px;
    } 
    a{
      padding: 10px 10px;
      display: inline-block;
      position: absolute;
      right: 0;
      bottom: 10px;
    }
    .beer_img,.cocktail_img {
      width: 20.833333%;
      // opacity: 0;
    }
    .beer_word,.cocktail_word{
      width: 27.5%;
      padding: 20px 20px 50px 20px;
      box-sizing: border-box;
      position: relative;
      text-align: left;
    }
  }
  .Home_Bartender{
    height: 600px;
    padding-top:100px;
    .Home_Bartender{
      height: 600px;
    }
    .bartender{
      position: absolute;
      // opacity: 0;
    }
    .line{
      position: relative;
      width: 83.333333%;
      height: 550px;
      margin:auto;
      box-sizing: border-box;
      border:6px solid #FFF;
      opacity: .9;
      z-index: 1;
      box-shadow:1px 1px 100px 10px #f00,inset 1px 1px 100px 8px #ffc001;
    }
    .ph1{
      width: 35%;
      top:-30px;
      left:-4.166666%;
      z-index: 1;
      box-shadow: 0px 0px 1px 1px #aaa;
    }
    .ph2{
      top:230px;
      left: -1%;
      width: 23%;
      box-shadow: 0px 0px 1px 1px #aaa;
    }
    .ph3{
      top:130px;
      left: 25%;
      width: 23%;
      box-shadow: 0px 0px 1px 1px #aaa;	
    }
    span{
      position: absolute;
      display: block;
      text-align: center;
      font-size:24px;
      text-shadow: 1px 1px 15px #ff0;
      color:#fff;
      line-height: 30px;
      padding:10px 0px; 
      width: 100%;
      height: 60px;
      bottom:0;
      left:0;
      opacity: 0;
      transition: opacity 1s;
    }
    span p{
      font-size: 16px;
    }
    .bartender:hover span{
      background-color: rgba(50,50,50,.7);
      opacity: 1;
    }
    .word{
      width: 30%;
      position: absolute;
      top:150px;	
      right: 13%;
      font-size: 20px;
      line-height: 2;
      text-align: left;
    }
    a{
      position: absolute;
      right: 13%;
      bottom: 100px;
      padding: 10px 0;
      font-size:20px;
    }
  }
  .Home_Live{
    text-align: center;
    .liveBand_img{
      width: 37.5%;
      display: inline-block;
      margin-left: 0px;
      vertical-align: top;
      box-shadow: 1px 1px 1px 1px #000;
    }
    .liveBand_word{
      width: 37.5%;
      height: 300px;
      display: inline-block;
      position: relative;
      box-sizing: border-box;
      margin-left: 50px;
      font-size: 20px;
      text-align: right;
      line-height: 2;
      vertical-align: top;
    }
    .liveBand_word p{
      width: 100%;
      position: absolute;
      top:50%;
      left: 50%;
      transform: translate(-50%, -50%);	
      text-align: left;
    }
    a{
      position: absolute;
      padding: 10px 0;
      bottom: 0;
      right: 0%;
    }
  }
  .Home_contact{
    display: flex;
    text-align: center;
    .Address_box{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      /*justify-content: center;*/
      width: 50%;
      height: 300px;
      line-height: 2;
      background: -webkit-linear-gradient(-235deg,yellow 0%,red 100%);
      background: linear-gradient(325deg,yellow 0%,red 100%);
    }
    .Address_box p{
      position: relative;
      color:#fff;
    }
    .Map{
      width: 50%;
      height: 300px;
    }
    iframe{
      width: 100%;
    } 
    .icon{
      width: 50%;
      margin: 10px 0;
      display: flex;
      justify-content: space-around;
    }
    .icon img{
      vertical-align: bottom;
      border-radius: 100%;
      width: 30px;
      height: 30px;
    }
  }
`
const S_footer = styled.footer`
  width: 100%;
  font-family: Arial;
  font-size: 12px;
  line-height: 16px;
  margin-top: 40px;
  margin-bottom: 10px;
  color:#ccc;
  text-align: center;

`
export default App;
