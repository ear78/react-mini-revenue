import React from 'react';
import MobileMenu from './MobileMenu/MobileMenu';
import Navigation from './Navigation/Navigation';
import logo from '../../logo.svg';
import styles from './Header.module.scss';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Welcome to Mini Project',
      isToggleOn: true
    }
  }

  handleToggleMenu = () => {
    this.setState( ( prevState ) => ( {
      isToggleOn: !prevState.isToggleOn
    } ) );
  }
  render() {
    return (
      <header className={styles.Header}>
              <Navigation
                  click={this.handleToggleMenu}/>

                <div className={styles.LogoContainer}>
                  <img src={logo} className={styles.Logo} alt="logo" />
              </div>
              <h1 className={styles.Title}>{this.state.title}</h1>

              {/* Mobile Menu */}
              <MobileMenu
                  toggle={this.state.isToggleOn}
                  click={this.handleToggleMenu}/>
            </header>
    )
  }
}

export default Header;