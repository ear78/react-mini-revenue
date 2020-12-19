import React, {
  useRef,
  useLayoutEffect
} from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme( am4themes_animated );

function Chart( props ) {
  let dataSet = props.data

  const chart = useRef( null );

  useLayoutEffect( () => {
    let x = am4core.createFromConfig( {
        "xAxes": [ {
          "type": "CategoryAxis",
          "dataFields": {
            "category": "Split"
          },
          "title": "Events",
            } ],
        "yAxes": [ {
          "type": "ValueAxis",
          "title": {
            "text": "Revenue"
          }
        } ],
        "series": [ {
            "type": "LineSeries",
            "dataFields": {
              "valueY": "Revenue",
              "categoryX": "Split"
            }
        },
          {
            "type": "LineSeries",
            "dataFields": {
              "valueY": "Events",
              "categoryX": "Split"
            }
          }
        ],

        // Add data
        "data": dataSet,
        // And, for a good measure, let's add a legend
        "legend": {}
      },
      `chart-${props.id}`, am4charts.XYChart );

    chart.current = x;

    return () => {
      x.dispose();
    };
  }, [] );

  return <div id={`chart-${props.id}`} style={{ width: "100%", height: "500px"}}></div>
}

export default Chart