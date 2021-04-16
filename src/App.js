import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/Nav';
import { GlobalStyle } from './App.style';
import HomeBoard from "./components/HomeBoard";
import PageUnavailable from './components/PageUnavailable';
import UserProfile from './components/UserProfile';
import { SearchInputProvider } from './components/contexts/SearchInputContext';
import { ImagePinsProvider } from './components/contexts/ImagePinsContext';


function App() {
  return (
    <SearchInputProvider>
      <ImagePinsProvider>
        <div className="App">
          <GlobalStyle />
          <Router>
            <Nav />
            <Switch>
              <Route exact path= {["/", "/pinterest-clone/"]} component={HomeBoard} />
              <Route exact path="/pinterest-clone/profile" component={UserProfile} />
              <Route exact path="/pinterest-clone/page-unavailable" component={PageUnavailable} />
            </Switch>
          </Router>
        </div>
      </ImagePinsProvider>
    </SearchInputProvider>
  );
}

export default App;
