import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Article from "./pages/Articles"
import Home from "./components/Home";
import Saved from "./components/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";

const App = () => (
  <Router>
  <div>
  <Nav/>
  {/* <Jumbotron><h1> New York Times Article Search </h1></Jumbotron> */}
  {/* <Nav/> */}
  <Article/>
  <Switch> 
  <Route exact path="/" component={Home} />
  <Route exact path="/saved" component={Saved} />
  </Switch> 
  </div> 
  </Router>
);

export default App;
