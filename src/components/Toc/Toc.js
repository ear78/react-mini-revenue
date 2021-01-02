import React from 'react';

import overview from '../../overview';
import mockData from '../../mockData';
import styles from './Toc.module.scss';
import {
  staggered,
  fadeIn
} from "../../assets/Animate"
import TocContent from './TocContent/TocContent.js';
import PageTitle from '../UI/PageTitle/PageTitle';
import TableOfContents from './TableOfContents/TableOfContents';
import ListItem from './ListItem/ListItem';

class Toc extends React.Component {
  constructor() {
    super();
    this.state = {
      data: mockData,
      content: {}
    }

    /* Create Refs for animations */
    this.rightSection = React.createRef()
    this.myElements = []
    this.tocRefs = []

  }

  handleSetContent( id ) {
    let x = this.state.data.find( ( el, i ) => {
      el = i === id ? el : ''
      return el
    } )

    this.setState( () => ( {
      content: x
    } ) )
  }

  componentDidMount() {
    // Set first data set 
    this.handleSetContent( 0 )

    // Animations
    staggered( this.myElements )
    fadeIn( this.rightSection.current )
  }
  render() {
    const listItem = this.state.data.map( ( d, i ) => {
      return <ListItem key={i}
        inputRef={el => this.myElements[i] = el}
        item={d.product}
        click={() => this.handleSetContent(i)}/>
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
                <TocContent content={this.state.content}/>

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