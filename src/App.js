import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.js';

import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import Services from './components/ServicesAll.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Work from './components/Work.js';
import Map from './components/Map.js';
import NotFound from './components/NotFound.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <ScrollToTop>
        <div className="wrapper">
          <Header />
          <div className="borderbar"></div>
          <div className="mainwrapper">
            <div className="aside-1"></div>
            <div className="main">
              <Switch>
                <Route path="/Map" component={Map} />
                <Route path="/Work" component={Work} />
                <Route path="/Services" component={Services} />
                <Route path="/About" component={About} />
                <Route path="/Contact" component={Contact} />
                <Route path="/" exact component={Home} />
                <Route component={NotFound} />
              </Switch>
            </div>
            <div className="aside-2"></div>
          </div>
          <Footer />
        </div>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
