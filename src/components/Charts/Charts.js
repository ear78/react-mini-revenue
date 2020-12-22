import React from 'react';
import overview from '../../overview';
import styles from './Charts.module.scss'
import Paragraph from '../UI/Paragraph/Paragraph'
import Chart from './Chart'
import ChartPie from './ChartPie'
import Spinner from '../UI/Spinner/Spinner'

class Charts extends React.Component {
  constructor() {
    super();

    this.state = {
      events_revenue: [],
      users: [],
      totalNewUsers: null,
      totalUsers: null,
      pieData: [],
      dataReady: false
    };
  }

  processData() {
    // TRANSFORMING DATA FOR GRAPH ONE
    const events_revs = overview.map( ( event, i ) => {
      return {
        Revenue: event.Revenue,
        Events: event.Events,
        Split: i
      };
    } );

    // INITIALIZING ARRAYS FOR TRANSFORMED USER DATA
    const newUserArr = [];
    const newTotalUsersArr = [];

    // TRANSFORMING DATA FOR GRAPH TWO
    const users = overview.map( ( data, i ) => {
      const newUser = newUserArr.push( data.New_Users );
      const newTotalUsers = newTotalUsersArr.push( Math.round( data.Total_Users ) );
      const user = `User ${i + 1}`
      return {
        ...data,
        user
      };
    } );

    // REDUCER FOR GETTING TOTALS
    const reducer = ( acc, currVal ) => {
      return acc + currVal
    }

    // TOTALED VALUES
    const totalNewUsers = newUserArr.reduce( reducer );
    const totalUsers = newTotalUsersArr.reduce( reducer );

    this.setState( () => {
      return {
        events_revenue: events_revs,
        users: users,
        totalNewUsers: totalNewUsers,
        totalUsers: totalUsers,
        dataReady: true
      }
    } )
  }

  componentDidMount() {
    this.processData()
  }

  render() {
    let chartXY
    if ( this.state.dataReady && this.state.events_revenue.length ) {
      chartXY = <Chart id="xyChart" data={this.state.events_revenue}/>
    } else {
      chartXY = <Spinner />
    }

    let chartPie
    if ( this.state.dataReady && this.state.users ) {
      chartPie = <ChartPie id="pieChart" value="Revenue" category="user" data={this.state.users}/>
    } else {
      chartPie = <Spinner />
    }

    return (
      <div className={`${styles.Charts}`}>
        <h4><span>Charts </span></h4>
        <div className={`grid-container`}>
          <div className={`grid-x grid-margin-x`}>
            <div className={`small-12 cell`}>
              <Paragraph>This section brings in chart data and transforms the data into useable values for displaying in the chart.</Paragraph>
            </div>

            <div className="small-12 large-6 cell">
              <div className={styles.ChartWrapper}>
                {chartXY}
              </div>
            </div>
            <div className="small-12 large-6 cell">
              <div className={styles.ChartWrapper}>
                {chartPie}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Charts;