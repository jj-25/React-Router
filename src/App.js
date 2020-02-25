import React from 'react';
import './App.scss';
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import ItemDetail from "./ItemDetail";
import { BrowserRouter as Router , Switch ,Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path ="/" exact component={Home}/>
          <Route path ="/about" component={About}/>
          <Route path ="/shop" exact component={Shop}/>
          <Route path ="/shop/:id" component={ItemDetail}/>
          <Route component={noMatch}/>
        </Switch>
      </div>
    </Router>
  );
};
const Home = () =>{
  return(
    <div>
      <h1>Home Page</h1>
      <img src="logo192.png" alt="logo"/>
    </div>
  )
}
const noMatch = () =>{
  return(
    <h1>No Match</h1>
  )
}
export default App;
