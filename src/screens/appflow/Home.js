import {
  BarChart,
  ContributionGraph,
  LineChart,
  PieChart,
  ProgressChart,
  StackedBarChart
} from "react-native-chart-kit";
import { Dimensions, Text, View } from 'react-native';
// import { BarChart, Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts'
import React, { Component } from 'react';

import PureChart from 'react-native-pure-chart';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    // const data = [ 50, 10, 40, 95 , 85, 91, 35, 53, 24, 50 ]
    // const data = {
    //   labels: ["January", "February", "March", "April", "May", "June"],
    //   datasets: [
    //     {
    //       data: [20, 45, 28, 80, 99, 43]
    //     }
    //   ]
    // };
    let sampleData = [
      {
        seriesName: 'series1',
        data: [
          {x: 'Jan', y: 30},
          {x: 'Feb', y: 150},
          {x: 'March', y: 170},
          {x: 'April', y: 150},
          {x: 'May', y: 10}
        ],
        color: '#cc92ff'
      },
      {
        seriesName: 'series2',
        data: [
          {x: 'Jan', y: 200},
          {x: 'Feb', y: 100},
          {x: 'March', y: 140},
          {x: 'April', y: 50},
          {x: 'May', y: 105}
        ],
        color: '#84faf7'
      },
      {
        seriesName: 'series3',
        data: [
          {x: 'Jan', y: 20},
          {x: 'Feb', y: 70},
          {x: 'March', y: 140},
          {x: 'April', y: 70},
          {x: 'May', y: 80}
        ],
        
        color: '#505c82'
      },
      {
        seriesName: 'series3',
        data: [
          {x: 'Jan', y: 20},
          {x: 'Feb', y: 120},
          {x: 'March', y: 100},
          {x: 'April', y: 70},
          {x: 'May', y: 40}
        ],
        
        color: '#87f79e'
      }
    ]

    return (
     
    <PureChart data={sampleData} type='bar' width={'100%'}
    height={200} borderTopLeftRadius={10} borderTopRightRadius={40}/>
//       <View>
//   <Text>Bezier Line Chart</Text>
//   <BarChart
//     data={{
//       labels: ["January", "February", "March", "April", "May", "June"],
//       datasets: [
//         {
//           data: [
//             Math.random() * 100,
//             Math.random() * 100,
//             Math.random() * 100,
//             // Math.random() * 100,
//             // Math.random() * 100,
//             // Math.random() * 100
//           ]
//         },
//         // {y
//       ]
//     }}
//     width={Dimensions.get("window").width} // from react-native
//     height={220}
//     yAxisLabel={"$"}
//     chartConfig={{
//       backgroundColor: "#e26a00",
//       backgroundGradientFrom: "#fb8c00",
//       backgroundGradientTo: "#ffa726",
//       decimalPlaces: 2, // optional, defaults to 2dp
//       color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//       labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//       style: {
//         borderRadius: 16
//       },
//       propsForDots: {
//         r: "6",
//         strokeWidth: "2",
//         stroke: "#ffa726"
//       }
//     }}
//     bezier
//     style={{
//       marginVertical: 8,
//       borderRadius: 16
//     }}
//   />
// </View>
    );
  }
}
