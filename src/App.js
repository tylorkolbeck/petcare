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
import TopDrawer from './Components/DrawerToggleButton/TopDrawer'
import Backdrop from './Components/Backdrop/Backdrop'
import Slider from './Components/Slider/Slider'

class App extends Component {

  state= {
    sideDrawerOpen: false
  }
  
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
    console.log('Drawer Toggle')
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  }

  render() {
   
    
    let backdrop
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }

    return (
      <BrowserRouter >
    
          <div className="App">
            <header>

              <NavLink to="/"><Logo /></NavLink>

              <MainMenu drawerClickedHandler={this.drawerToggleClickHandler}/>
              <TopDrawer show={this.state.sideDrawerOpen} />
              {backdrop}

              <div style={{clear: 'both'}}></div>
            </header>
            <Route exact path="/" component={Home} />
            <Route exact path="/story" component={Story} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/faq" component={Faq} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/newsletter" component={Newsletter} />
            <Route exact path="/slider" component={Slider} />

            <footer className="App__footer_container"><Footer /></footer>
          </div>
      </BrowserRouter>
     
    );
  }
}

export default App;
