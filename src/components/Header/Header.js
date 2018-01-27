import React from 'react';
import Navigation from './Navigation/Navigation';
import logo from '../../logo.svg';
import './Header.css';

class Header extends React.Component{
    constructor(){
        super();
        this.state = {
            title: 'Welcome to Mini Project'
        }
    }
    render(){
        return (
            <header className="header">
              <Navigation />
              <div className="logo-container">
                  <img src={logo} className="logo" alt="logo" />
              </div>
              <h1 className="title">{this.state.title}</h1>
            </header>
        )
    }
}

export default Header;
