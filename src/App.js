import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import ListingPage from './components/ListingPage';
import CabinDemo from './components/cabin/CabinDemo';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import LandingPage from './components/landing/LandingPage';
import NewListingTest from './components/testers/NewListingTest';

class App extends Component {
  render() {
    return (
      <div className="appContainer">
        <NavBar sticky="top" />
        <Route path='/' exact component={LandingPage} />
        <Route path='/listings' exact component={ListingPage} />
        <Route path ='/cabin-demo' exact component={CabinDemo} />
        <Route path ='/testers' exact component={NewListingTest} />
        <Footer />
      </div>
    );
  }
}

export default App;
