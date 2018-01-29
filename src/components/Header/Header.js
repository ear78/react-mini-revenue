import React from 'react';
import MobileMenu from '../UI/MobileMenu/MobileMenu';
import Navigation from './Navigation/Navigation';
import logo from '../../logo.svg';
import './Header.css';

class Header extends React.Component{
    constructor(){
        super();
        this.state = {
            title: 'Welcome to Mini Project',
            isToggleOn: true
        }
    }

    handleToggleMenu = () => {
        this.setState((prevState) => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    render(){
        return (
            <header className="header">
              <Navigation
                  click={this.handleToggleMenu}/>

              <div className="logo-container">
                  <img src={logo} className="logo" alt="logo" />
              </div>
              <h1 className="title">{this.state.title}</h1>

              {/* Mobile Menu */}
              <MobileMenu
                  toggle={this.state.isToggleOn}
                  click={this.handleToggleMenu}/>
            </header>
        )
    }
}

export default Header;
