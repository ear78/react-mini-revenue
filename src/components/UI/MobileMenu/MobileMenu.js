import React from 'react';
import { NavLink } from 'react-router-dom';

import './MobileMenu.css';

const mobileMenu = (props) => {
    return (
        <div className={props.toggle ? "mobile-menu" : "mobile-menu mobile-menu-active"}>
            <p ><i className="fa fa-circle menu-close" onClick={props.click} aria-hidden="true"></i></p>
            
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
