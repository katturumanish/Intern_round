import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Profile from "./components/components/Profile";


function App() {
  return (
  <>
    <BrowserRouter>
      <Switch>
         <Route path="/Home" component={LandingPage} />
         <Route path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  </>
  );
}

export default App;
