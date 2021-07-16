import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./navigation/Navbar";
import Home from "./navigation/Home";
import Service from "./navigation/Service";
import About from "./navigation/About";
import Contact from "./navigation/Contact";
import "./App.css"
import Error from "./navigation/error";

const App=()=>{
  return (
    <Fragment>
     <Router>
       <Navbar />
       <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/service" component={Service} exact></Route>
        <Route path="/about" component={About} exact></Route>
        <Route path="/contact" component={Contact} exact></Route>
        <Route component={Error}></Route>
       </Switch>
     </Router>
    </Fragment>
  )
}
export default App;