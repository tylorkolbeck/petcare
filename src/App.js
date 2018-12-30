import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

import Home from './Containers/Home/Home'
import Services from './Containers/Services/Services'
import Faq from './Containers/Faq/Faq'
import Contact from './Containers/Contact/Contact'
import Newsletter from './Containers/Newsletter/Newsletter'
import MainMenu from './Components/MainMenu/MainMenu'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <MainMenu />
          </header>
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/newsletter" component={Newsletter} />
        </div>
      </BrowserRouter>
     
    );
  }
}

export default App;
