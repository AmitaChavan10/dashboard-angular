import { Component } from '@angular/core';
import * as HighCharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widgets-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent {

  HighCharts: typeof HighCharts;
  // chartOptions: Highcharts.Options = {
  //   chart: {
  //     type: 'area'
  //   },
  //   title: {
  //     text: 'Greenhouse gases from Norwegian economic activity',
  //     align: 'left'
  //   },
  //   subtitle: {
  //     text: 'Source: ' +
  //       '<a href="https://www.ssb.no/en/statbank/table/09288/"' +
  //       'target="_blank">SSB</a>',
  //     align: 'left'
  //   },
  //   yAxis: {
  //     title: {
  //       useHTML: true,
  //       text: 'Million tonnes CO<sub>2</sub>-equivalents'
  //     }
  //   },
  //   tooltip: {
  //     shared: true,
  //     headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><br>'
  //   },
  //   plotOptions: {
  //     series: {
  //       pointStart: 2012
  //     },
  //     area: {
  //       stacking: 'normal',
  //       lineColor: '#666666',
  //       lineWidth: 1,
  //       marker: {
  //         lineWidth: 1,
  //         lineColor: '#666666'
  //       }
  //     }
  //   },
  //   series: [{
  //     name: 'Ocean transport',
  //     data: [13234, 12729, 11533, 17798, 10398, 12811, 15483, 16196, 16214]
  //   }, {
  //     name: 'Households',
  //     data: [6685, 6535, 6389, 6384, 6251, 5725, 5631, 5047, 5039]

  //   }, {
  //     name: 'Agriculture and hunting',
  //     data: [4752, 4820, 4877, 4925, 5006, 4976, 4946, 4911, 4913]
  //   }, {
  //     name: 'Air transport',
  //     data: [3164, 3541, 3898, 4115, 3388, 3569, 3887, 4593, 1550]

  //   }, {
  //     name: 'Construction',
  //     data: [2019, 2189, 2150, 2217, 2175, 2257, 2344, 2176, 2186]
  //   }] as Highcharts.SeriesOptionsType[]
  // };

  chartOptions: Highcharts.Options = {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Area Chart'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
    },
    yAxis: {
        title: {
            text: 'Value'
        }
    },
    series: [{
        name: 'Series 1',
        data: [10, 20, 30, 40, 50]
    },
  {
    name: 'Series 2',
    data: [15, 20, 50, 60, 70]
  }] as Highcharts.SeriesOptionsType[]
};

chartOption: Highcharts.Options = {
  chart: {
      type: 'bar'
  },
  title: {
      text: 'Bar Chart'
  },
  xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
  },
  yAxis: {
      title: {
          text: 'Value'
      }
  },
  series: [{
      name: 'Series 1',
      data: [10, 20, 30, 40, 50]
  }] as Highcharts.SeriesOptionsType[]
};

  constructor() {
    this.HighCharts = HighCharts;
  }
  
}
