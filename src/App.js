import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/Nav';
import { GlobalStyle } from './App.style';
import HomeBoard from "./components/HomeBoard";
import PageUnavailable from './components/PageUnavailable';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Nav />
        <Switch>
          {/* //! make profile */}
          <Route exact path= {["/", "/pinterest-clone/"]} component={HomeBoard} />
          <Route exact path="/pinterest-clone/profile" component={UserProfile} />
          <Route exact path="/pinterest-clone/page-unavailable" component={PageUnavailable} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
