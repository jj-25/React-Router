import React from 'react';
import './App.css';
import Nav from "./Nav";
import About from "./About";
import Drinks from "./Drinks";
import Food from "./Food";
import ItemDetail from "./ItemDetail";
import { BrowserRouter as Router , Switch ,Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path ="/" exact component={Home}/>
          <Route path ="/drinks" component={Drinks}/>
          <Route path ="/food"  component={Food}/>
          <Route path ="/about"  component={About}/>
          {/* <Route path ="/shop/:id" component={ItemDetail}/> */}
        </Switch>
      </div>
    </Router>
  );
};
const Home = () =>{
  return(
    <div>
      <h1>Home Page</h1>
    </div>
  )
}
export default App;
