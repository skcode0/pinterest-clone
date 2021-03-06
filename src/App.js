import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/Nav';
import { GlobalStyle } from './App.style';
import HomeBoard from "./components/HomeBoard";
import PageUnavailable from './components/PageUnavailable';
import UserProfile from './components/UserProfile';
import { SearchInputProvider } from './components/contexts/SearchInputContext';
import { ImagePinsProvider } from './components/contexts/ImagePinsContext';
import MobileNotif from './components/MobileNotif';
import MobileInbox from './components/MobileInbox';
import { BoardsInfoProvider } from './components/contexts/BoardsInfoContext';
import BoardDetails from './components/BoardDetails';
import ImgPinDetails from './components/ImgPinDetails';
import { CachedImgsProvider } from './components/contexts/CachedImgsContext';

function App() {
  return (
    <BoardsInfoProvider>
      <SearchInputProvider>
        <ImagePinsProvider>
          <CachedImgsProvider>
            <div className="App">
              <GlobalStyle />
              <Router>
                <Nav />
                <Switch>
                  <Route exact path= {["/", "/pinterest-clone/"]} component={HomeBoard} />
                  <Route exact path="/pinterest-clone/pin/:id" component={ImgPinDetails} />
                  <Route exact path="/pinterest-clone/profile" component={UserProfile} />
                  <Route exact path="/pinterest-clone/profile/:name" component={BoardDetails} />
                  <Route exact path="/pinterest-clone/page-unavailable" component={PageUnavailable} />
                  <Route exact path="/pinterest-clone/notifications" component={MobileNotif} />
                  <Route exact path="/pinterest-clone/inbox" component={MobileInbox} />
                </Switch>
              </Router>
            </div>
          </CachedImgsProvider>
        </ImagePinsProvider>
      </SearchInputProvider>
    </BoardsInfoProvider>
  );
}

export default App;
