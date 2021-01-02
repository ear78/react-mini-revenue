import React from 'react';
import {
  NavLink
} from 'react-router-dom';
import styles from './Navigation.module.scss';

class Navigation extends React.Component {
  render() {
    return (
      <nav className={styles.Navigation}>
                <ul >
                    <NavLink exact to='/' >Home<i className="fa fa-tree" aria-hidden="true"></i>
                    </NavLink>
                    <NavLink to='/tables' >Tables<i className="fa fa-table" aria-hidden="true"></i>
                    </NavLink>
                    <NavLink to='/charts' >Charts<i className="fa fa-bar-chart" aria-hidden="true"></i>
                    </NavLink>
                    <NavLink to='/toc' >TOC<i className="fa fa-list-alt" aria-hidden="true"></i>
                    </NavLink>
                </ul>
                <p className={styles.MenuOpen}
                  onClick={this.props.click}>
                  <i className="fa fa-circle-thin" aria-hidden="true"></i>
                </p>
            </nav>
    )
  }
}

export default Navigation;