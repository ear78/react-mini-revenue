import React from 'react';
import AmCharts from "@amcharts/amcharts3-react";

class Charts extends React.Component{
    render(){
        return (
            <div>
                <AmCharts.React
                    type="serial"
                    theme="light"
                    graphs={[]}
                    dataProvider={[]} />
            </div>
        )
    }
}

export default Charts;
