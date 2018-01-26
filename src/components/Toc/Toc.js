import React from 'react';

import overview from '../../overview';
import mockData from '../../mockData';
import './Toc.css';

class Toc extends React.Component{
    constructor(){
        super();
        this.state = {
            data: mockData
        }
    }
    render(){
        const listItem = this.state.data.map((d,i) => {
            return <li key={i}>{d.product}</li>
        })

        const tableOfContents = this.state.data.map((d,i) => {
            return <li key={i}>{d.product}
                        <ol className="sub">
                            <li>{d.table}</li>
                        </ol>
                    </li>
        })
        return (
            <main className="main-container">
                <nav className="nav-left">
                    <ul>
                        {listItem}
                    </ul>
                </nav>
                <section className="section-right">
                    <div className="content">
                        <h1>Fake Heading</h1>
                        <h4>Fake Sub Heading title</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                    <aside className="toc">
                        <h4>Table Of Contents</h4>
                        <ol>
                            {tableOfContents}
                        </ol>
                    </aside>
                </section>
            </main>
        )
    }
}

export default Toc;
