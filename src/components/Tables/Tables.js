import React from 'react';
import Data from '../../overview';

import RevenueTable from './RevenueTable/RevenueTable';
import TotalUsers from './TotalUsers/TotalUsers';

class Tables extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title: 'Daily Revenue',
            data: Data
        }
    }

    render(){

        let overview = this.state.data.map((d,i) => {
            return (
                <div className="row" key={i}>
                    <RevenueTable
                        title={this.state.title}
                        rev={d.Revenue.toFixed(2)}/>

                    <TotalUsers
                        users={Math.round(d.Total_Users)}
                        date={new Intl.DateTimeFormat('en-US', {month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit'}).format(new Date(d.TimeSegment.end))}/>
                </div>
            )
        });

        return (
            <div>
                {overview}
            </div>
        )
    }
}

export default Tables;
