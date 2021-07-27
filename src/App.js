import React from "react";
import ThemeContextConsumer from "./context/ThemeContext";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Results from "./components/results/results";
import SpeedCheck from "./components/speed-check/speed-check";
import Challenges from "./components/challenges/challenges";

function App() {
  return (
     <div className="container pt-1">
     <BrowserRouter>
     <Navbar/>
     <Switch>
       <Route path="/results" component={Results} />
       <Route path="/challenges" component={Challenges} />
       <Route path="/" component={SpeedCheck} />
     </Switch>
     </BrowserRouter>
   </div>
  );
}

export default App;
