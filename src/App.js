import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import ListingPage from './components/ListingPage';
import CabinDemo from './components/cabin/CabinDemo';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import LandingPage from './components/landing/LandingPage';
import NewListingTest from './components/testers/NewListingTest';
import SignUpPage from './components/SignUpPage';

class App extends Component {
  render() {
    return (
      <div className="appContainer">
        <NavBar sticky="top" />
        <Route path='/' exact component={LandingPage} />
        <Route path='/listings' exact component={ListingPage} />
        <Route path ='/cabin-demo' exact component={CabinDemo} />
        <Route path ='/sign-up' exact component={SignUpPage} />
        <Route path ='/testers' exact component={SignUpPage} />
        <Footer />
      </div>
    );
  }
}

export default App;
