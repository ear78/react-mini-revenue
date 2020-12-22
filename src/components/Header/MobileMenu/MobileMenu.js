import React from 'react';
import {
  NavLink
} from 'react-router-dom';

import styles from './MobileMenu.module.scss';

const mobileMenu = ( props ) => {
  return (
    <div className={props.toggle ? `${styles.MobileMenu}` : `${styles.MobileMenu} ${styles.Active}`}>
            <div className={props.toggle ? '' : styles.MobileMenuBackground}></div>
            <p ><i className={`fa fa-circle ${styles.MenuClose}`} onClick={props.click} aria-hidden="true"></i></p>

            <ul>
                <NavLink exact to='/' onClick={props.click}>Home<i className="fa fa-tree" aria-hidden="true" ></i>
                </NavLink>
                <NavLink to='/tables' onClick={props.click}>Tables<i className="fa fa-table" aria-hidden="true"></i>
                </NavLink>
                <NavLink to='/charts' onClick={props.click}>Charts<i className="fa fa-bar-chart" aria-hidden="true"></i>
                </NavLink>
                <NavLink to='/toc' onClick={props.click}>TOC<i className="fa fa-list-alt" aria-hidden="true"></i>
                </NavLink>
            </ul>
        </div>
  )

}

export default mobileMenu;