import React from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component{
    render(){
        return(
            <nav>
                <ul>
                    <NavLink to='/tables' >Tables</NavLink>
                    <NavLink to='/charts' >Charts</NavLink>
                    <NavLink to='/toc' >Table Of Contents</NavLink>
                </ul>
            </nav>
        )
    }
}

export default Navigation;
