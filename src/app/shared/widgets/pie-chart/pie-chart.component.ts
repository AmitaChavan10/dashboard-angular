import { Component } from '@angular/core';
import * as HighCharts from 'highcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {

  HighCharts: typeof HighCharts;

  constructor() {
    this.HighCharts = HighCharts;
  }

  chartOptions: Highcharts.Options = {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Pie Chart'
    },
    series: [{
        name: 'Series 1',
        data: [
            { name: 'Category 1', y: 10 },
            { name: 'Category 2', y: 20 },
            { name: 'Category 3', y: 30 },
            { name: 'Category 4', y: 40 },
            { name: 'Category 5', y: 50 }
        ]
    }] as Highcharts.SeriesOptionsType[]
  }

//   chartOptions: Highcharts.Options = {
//     chart: {
//         type: 'pie'
//     },
//     title: {
//         text: 'Egg Yolk Composition'
//     },
//     tooltip: {
//         valueSuffix: '%'
//     },
//     subtitle: {
//         text:
//         'Source:<a href="https://www.mdpi.com/2072-6643/11/3/684/htm" target="_default">MDPI</a>'
//     },
//     plotOptions: {
//         series: {
//             allowPointSelect: true,
//             cursor: 'pointer',
//             dataLabels: [{
//                 enabled: true,
//                 // distance: 20
//             }, {
//                 enabled: true,
//                 // distance: -40,
//                 format: '{point.percentage:.1f}%',
//                 style: {
//                     fontSize: '1.2em',
//                     textOutline: 'none',
//                     opacity: 0.7
//                 },
//                 filter: {
//                     operator: '>',
//                     property: 'percentage',
//                     value: 10
//                 }
//             }]
//         }
//     },
//     series: [
//         {
//             name: 'Percentage',
//             colorByPoint: true,
//             data: [
//                 {
//                     name: 'Water',
//                     y: 55.02
//                 },
//                 {
//                     name: 'Fat',
//                     sliced: true,
//                     selected: true,
//                     y: 26.71
//                 },
//                 {
//                     name: 'Carbohydrates',
//                     y: 1.09
//                 },
//                 {
//                     name: 'Protein',
//                     y: 15.5
//                 },
//                 {
//                     name: 'Ash',
//                     y: 1.68
//                 }
//             ]
//         }
//     ] as Highcharts.SeriesOptionsType[]
// };


}
