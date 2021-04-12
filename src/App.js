import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/Nav';
import { GlobalStyle } from './App.style';
import HomeBoard from "./components/HomeBoard";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Nav />
        <Switch>
          {/* //! make profile */}
          <Route exact path= {["/", "/pinterest-clone/"]} component={HomeBoard} />
          <Route exact path="/pinterest-clone/profile" component={""} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
