import React from 'react';
import './App.css';
import { Route, BrowserRouter } from "react-router-dom";
import Dialogs from './Component/Dialogs/Dialogs';
import Profile from './Component/Profile/Profile';
import News from './Component/News/News'
import Music from './Component/Music/Music'
import Settings from './Component/Settings/Settings'
import Friends from './Component/Friends/Friends'
import Header from './Component/Header/Header';
import Sidebar from './Component/Sidebar/Sidebar'


function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Sidebar />
        <div className="app-wrapper-content">
          <Route path="/profile" component={Profile}></Route>
          <Route path="/message" component={Dialogs}></Route>
          <Route path="/news" component={News}></Route>
          <Route path="/music" component={Music}></Route>
          <Route path="/settings" component={Settings}></Route>
          <Route path="/friends" component={Friends}></Route>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
