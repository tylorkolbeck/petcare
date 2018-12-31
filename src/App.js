import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import './App.css';



import Home from './Containers/Home/Home'
import Services from './Containers/Services/Services'
import Faq from './Containers/Faq/Faq'
import Contact from './Containers/Contact/Contact'
import Newsletter from './Containers/Newsletter/Newsletter'
import MainMenu from './Components/MainMenu/MainMenu'
import Logo from './Components/Logo/Logo'
import Story from './Components/Story/Story'
import Footer from './Components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>

            <NavLink to="/"><Logo /></NavLink>

            <MainMenu />
            <div style={{clear: 'both'}}></div>
          </header>
          <Route exact path="/" component={Home} />
          <Route exact path="/story" component={Story} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/newsletter" component={Newsletter} />

          <footer className="App__footer_container"><Footer /></footer>
        </div>
      </BrowserRouter>
     
    );
  }
}

export default App;
