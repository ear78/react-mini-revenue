import React from 'react';
import Data from '../../overview';
import {
  staggered
} from "../../assets/Animate"

import Paragraph from '../UI/Paragraph/Paragraph'
import RevenueTable from './RevenueTable/RevenueTable';
import TotalUsers from './TotalUsers/TotalUsers';
import styles from './Tables.module.scss';

class Tables extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      title: 'Daily Revenue',
      data: Data
    }
    this.tableElements = []
  }

  componentDidMount() {
    staggered( this.tableElements, .15 )
  }

  render() {

    let overview = this.state.data.map( ( d, i ) => {
      return (
        <div className={`grid-x`} ref={el => this.tableElements[i] = el} key={i}>
                    <RevenueTable
                        title={this.state.title}
                        rev={d.Revenue.toLocaleString({style: 'currency', currency: 'US'})}/>

                    <TotalUsers
                        users={Math.round(d.Total_Users).toLocaleString()}
                        date={new Intl.DateTimeFormat('en-US', {month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit'}).format(new Date(d.TimeSegment.end))}/>
                </div>
      )
    } );

    return (
      <div className={styles.Tables}>
                <h4><span>Tables</span></h4>
                <div className={`grid-container`}>
                  <div className={`grid-x`}>
                    <div className={`small-12 cell`}>
                      <Paragraph>This section brings in data and transforms the data into useable values for displaying in the tables. It is using the native Javascript <strong>DateTimeFormat()</strong> method to format the date data.</Paragraph>
                    </div>
                  </div>

                  {overview}
                </div>
            </div>
    )
  }
}

export default Tables;