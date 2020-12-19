import React, {
  useRef,
  useLayoutEffect
} from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme( am4themes_animated );

function ChartPie( props ) {
  let dataSet = props.data
  let valueProp = props.value
  let categoryProp = props.category
  const chart = useRef( null );

  useLayoutEffect( () => {
      let x = am4core.createFromConfig( {
          "series": [ {
            "type": "PieSeries",
            "dataFields": {
              "value": valueProp,
              "category": categoryProp
            }
          } ],
          // Add data
          "data": dataSet,
          // And, for a good measure, let's add a legend
          "legend": {}
        },
        `chart-${props.id}`,
        am4charts.PieChart );

      chart.current = x;
      console.log( 'pie:', chart );
      return () => {
        x.dispose();
      };
    },
        [] );

  return <div id={`chart-${props.id}`} style={{ width: "100%", height: "500px"}}></div>
}

export default ChartPie