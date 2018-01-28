import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

class Navigation extends React.Component{
    render(){
        return(
            <nav className="navigation">
                <ul >
                    <NavLink exact to='/' >Home<i class="fa fa-tree" aria-hidden="true"></i>
                    </NavLink>
                    <NavLink to='/tables' >Tables<i class="fa fa-table" aria-hidden="true"></i>
                    </NavLink>
                    <NavLink to='/charts' >Charts<i class="fa fa-bar-chart" aria-hidden="true"></i>
                    </NavLink>
                    <NavLink to='/toc' >TOC<i class="fa fa-list-alt" aria-hidden="true"></i>

                    </NavLink>
                </ul>
            </nav>
        )
    }
}

export default Navigation;
