import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";
import CC2 from './images/CC2.png';
import GHMark from './images/GitHub-Mark-Light-32px.png';
import ScrollToTop from './components/ScrollToTop.js';

import './App.css';
import Home from './components/Home.js';
import Services from './components/ServicesAll.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Work from './components/Work.js';
import Map from './components/Map.js';
import NotFound from './components/NotFound.js';
import Designs from './components/Designs.js';

class App extends Component {
  componentWillMount() {
    // sets the initial state
    this.setState({
      isMenuOpened: false
    });
  }

  render() {
    return (
      <BrowserRouter>
        <OffCanvas
          width={350}
          transitionDuration={300}
          isMenuOpened={this.state.isMenuOpened}
          position={"right"}
          effect={"overlay"}
        >

          <OffCanvasBody>
            <ScrollToTop>
              <div className="wrapper">
                <div className="header">
                  <Link className="logo" to="/" onClick={this.closeMenu.bind(this)}>Handy Home Solutions, LLC</Link>
                  <div className="menubutton" onClick={this.handleClick.bind(this)}></div>
                </div>
                <div className="borderbar"></div>
                <div className="mainwrapper" onClick={this.closeMenu.bind(this)}>
                  <div className="aside-1"></div>
                  <div className="main">
                    <Switch>
                      <Route path="/Map" component={Map} />
                      <Route path="/Work" component={Work} />
                      <Route path="/Services" component={Services} />
                      <Route path="/Background" component={About} />
                      <Route path="/Contact" component={Contact} />
                      <Route path="/HandyHomeDesigns" component={Designs} />
                      <Route path="/" exact component={Home} />
                      <Route component={NotFound} />
                    </Switch>
                  </div>
                  <div className="aside-2"></div>
                </div>
                  <div className="footer" onClick={this.closeMenu.bind(this)}>
                    <div className="footeraside">&nbsp;</div>
                    <div className="footermain">
                      <div className="footerbox1"><img className="CC2" src={CC2} alt="CC2" /></div>
                      <div className="footerbox2">&copy; Handy Home Solutions, LLC<br /><Link className="footerlink" to="/Contact">tucsonhhs@gmail.com</Link></div>
                      <div className="footerbox3">
                        <Link className="footerlink" to="/HandyHomeDesigns">Handy Home Designs</Link>
                        <br />
                        <Link className="footerlink" to="/">Home</Link> | <Link className="footerlink" to="/Services">Services</Link> | <Link className="footerlink" to="/Contact">Contact</Link>
                        <br />
                        <a href="https://github.com/x5g32/tucsonhhs">
                            <img src={GHMark} alt="x5g32 GitHub" className="footericonlink" />
                        </a>
                      </div>
                    </div>
                    <div className="footeraside">&nbsp;</div>
                  </div>
              </div>
              </ScrollToTop>
          </OffCanvasBody>

          <OffCanvasMenu
            className="menu"
          >
            <ul className="menu-ul">
              <li className="menu-li"><div className="menu-link" onClick={this.handleClick.bind(this)}>Menu</div></li>
              <li className="menu-li"><Link className="menu-link" to="/HandyHomeDesigns" onClick={this.handleClick.bind(this)}>Handy Home Designs</Link></li>
              <li className="menu-li"><Link className="menu-link" to="/Services" onClick={this.handleClick.bind(this)}>Our Services</Link></li>
              <li className="menu-li"><Link className="menu-link" to="/Background" onClick={this.handleClick.bind(this)}>Our Background</Link></li>
              <li className="menu-li"><Link className="menu-link" to="/Work" onClick={this.handleClick.bind(this)}>Slideshow</Link></li>
              <li className="menu-li"><Link className="menu-link" to="/Map" onClick={this.handleClick.bind(this)}>Service Area</Link></li>
              <li className="menu-li"><Link className="menu-link" to="/Contact" onClick={this.handleClick.bind(this)}>Contact Us</Link></li>
            </ul>
          </OffCanvasMenu>
        </OffCanvas>
      </BrowserRouter>
    );
  }

  handleClick() {
    // toggles the menu opened state
    this.setState({ isMenuOpened: !this.state.isMenuOpened });
  }
  
  closeMenu() {
    // closes menu when user clicks on main window
    this.setState({ isMenuOpened: false });
  }
}

export default App;
