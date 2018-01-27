import React from 'react';
import AmCharts from "@amcharts/amcharts3-react";
import overview from '../../overview';
import './Charts.css';

class Charts extends React.Component{
    constructor(){
        super();

        this.state = {
      events_revenue: null,
      users: null,
      totalNewUsers: null,
      totalUsers: null
    };
  }

  componentDidMount(){
      setTimeout(() => {
          this.setState({
              events_revenue: events_revs,
              users: users,
              totalNewUsers: totalNewUsers,
              totalUsers: totalUsers
          })
      },10);

      //TRANSFORMING DATA FOR GRAPH ONE
      const events_revs = overview.map((event, i) => {
          return {
              Revenue: event.Revenue,
              Events: event.Events,
          };
      });

      //INITIALIZING ARRAYS FOR TRANSFORMED USER DATA
      const newUserArr = [];
      const newTotalUsersArr = [];

      //TRANSFORMING DATA FOR GRAPH TWO
      const users = overview.map((user, i) => {
          const newUser = newUserArr.push(user.New_Users);
          const newTotalUsers = newTotalUsersArr.push(Math.round(user.Total_Users));
          return user;
      });

      //REDUCER FOR GETTING TOTALS
      const reducer = (acc, currVal) => {
          return acc + currVal
      }

      //TOTALED VALUES
      const totalNewUsers = newUserArr.reduce(reducer);
      const totalUsers = newTotalUsersArr.reduce(reducer);

  }

    render(){
        const config = {
          "type": "serial",
          "theme": "light",
          "legend": {
              "useGraphSettings": true
          },
          "categoryField": "Events",
          "valueAxes": [{
              "title": "Revenue",
              "position": "left",
              "unit": "$"
          }],
          "graphs": [{
              "valueField": "Revenue",
              "title": "Revenue",
              "type": "line",
              "fillAlphas": 0.1,
              "lineThickness": 2,
              "bullet": "round",
              "bulletBorderAlpha": 1,
              "bulletColor": "#FFFFFF",
              "bulletSize": 6,
              "useLineColorForBulletBorder": true
          },
            {
                "valueField": "Events",
                "title": "Events",
                "type": "line",
                "fillAlphas": 0,
                "lineThickness": 2,
                "bullet": "round",
                "bulletBorderAlpha": 1,
                "bulletColor": "#FFFFFF",
                "bulletSize": 6,
                "useLineColorForBulletBorder": true
            }],

          "dataProvider": this.state.events_revenue
        };
        const setup = {
              "type": "pie",
              "theme": "light",
              "dataProvider": [ {
                "title": "New",
                "value": this.state.totalNewUsers
              }, {
                "title": "Total Users",
                "value": this.state.totalUsers
              } ],
              "titleField": "title",
              "valueField": "value",
              "labelRadius": 10,

              "radius": "35%",
              "innerRadius": "60%",
              "labelText": "[[title]]",
              "export": {
                "enabled": true
              }
            }



        return (
            <div className="grid-x charts">
                <h3>Am <span>Charts </span>Are The Best!!!</h3>
                <div className="small-12 large-6 cell">
                    <AmCharts.React style={{ width: "100%", height: "500px" }} options={config} />
                </div>
                <div className="small-12 large-6 cell">
                    <AmCharts.React style={{ width: "100%", height: "500px" }} options={setup} />
                </div>

            </div>
        )
    }
}

export default Charts;
