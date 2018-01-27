import React from 'react';
import Navigation from './Navigation/Navigation';
import logo from '../../logo.svg';


class Header extends React.Component{
    constructor(){
        super();
        this.state = {
            title: 'Welcome to Mini Project'
        }
    }
    render(){
        return (
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">{this.state.title}</h1>
              <Navigation />
            </header>
        )
    }
}

export default Header;
