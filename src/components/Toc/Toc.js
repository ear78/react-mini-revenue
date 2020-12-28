import React from 'react';

import overview from '../../overview';
import mockData from '../../mockData';
import styles from './Toc.module.scss';
import {
  staggered,
  fadeIn
} from "../../assets/Animate"

import PageTitle from '../UI/PageTitle/PageTitle';
import TableOfContents from './TableOfContents/TableOfContents';
import ListItem from './ListItem/ListItem';

class Toc extends React.Component {
  constructor() {
    super();
    this.state = {
      data: mockData
    }
    this.rightSection = React.createRef()
    this.myElements = []
    this.tocRefs = []

  }

  componentDidMount() {
    staggered( this.myElements )
    fadeIn( this.rightSection.current )
  }
  render() {
    const listItem = this.state.data.map( ( d, i ) => {
      return <ListItem key={i} inputRef={el => this.myElements[i] = el}
        item={d.product}/>
    } )

    const tableOfContentsList = this.state.data.map( ( d, i ) => {
      return <TableOfContents key={i}
                    product={d.product}
                    table={d.table} />
    } )

    return (
      <div className={styles.TOC}>
        <PageTitle>TOC</PageTitle>
          <div className={styles.MainContainer}>
            <nav className={styles.NavLeft}>
                <ul>
                    {listItem}
                </ul>
            </nav>
            <section ref={this.rightSection} className={styles.SectionRight}>
              <div className={styles.Content}>
                      <h1>Fake Heading</h1>
                      <h4>Fake Sub Heading title</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>

                <aside className={styles.ContentRight}>
                    <h4>Table Of Contents</h4>
                    <ol>
                        {tableOfContentsList}
                    </ol>
                </aside>
            </section>
        </div>
      </div>
    )
  }
}

export default Toc;
