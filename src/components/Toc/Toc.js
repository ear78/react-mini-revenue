import React from 'react';

import overview from '../../overview';
import mockData from '../../mockData';
import './Toc.css';

import Content from './Content/Content';
import TableOfContents from './TableOfContents/TableOfContents';

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

        const tableOfContentsList = this.state.data.map((d,i) => {
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
                    <Content />

                    <aside className="toc">
                        <h4>Table Of Contents</h4>
                        <ol>

                            {tableOfContentsList}
                        </ol>
                    </aside>
                </section>
            </main>
        )
    }
}

export default Toc;
