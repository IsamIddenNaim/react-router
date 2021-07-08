import React from "react";
import {BrowserRouter as Router , Route,Switch ,Link}from "react-router-dom";
function App() {
  const Home = ()=>{
    return(
      <h1>Home</h1>
    )
  }
  const About = ()=>{
    return(
      <h1>about</h1>
    )
  }
  const Search = ()=>{
    return(
      <h1>search</h1>
    )
  }
  const Contact = ()=>{
    return(
      <h1>Contact Us</h1>
    )
  }
  return (
    <div className="App">
      <Router>
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/about">about</Link></li>
        <li><Link to="/search">search</Link></li>
        <li><Link to="/contact-us">contact us</Link></li>
      </ul>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/search">
            <Search/>
          </Route>
          <Route path="/contact-us">
            <Contact/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
