//Must npm i react-router-dom

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/header';
import NavBar from './components/layout/navbar';
import LearnMore from './components/pages/LearnMore';
import KnowYourRights from './components/pages/KnowYourRights';
import CreateRootAccount from './components/pages/CreateRootAccount';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <NavBar />
          <Route path="/learn-more" component={LearnMore}/>
          <Route path="/know-your-rights" component={KnowYourRights}/>
          <Route path="/create-root-account" component={CreateRootAccount}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
