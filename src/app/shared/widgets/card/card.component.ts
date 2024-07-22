import { Component, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as HighCharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widgets-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() label!: string;
  @Input() total!: string;
  @Input() percentage!: string;
  @Input() data = [];

  HighCharts: typeof HighCharts;
  // chartOptions = {};
  chartOptions: Highcharts.Options = {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Line Chart'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
    },
    yAxis: {
        title: {
            text: 'Value'
        }
    },
    series: [] as Highcharts.SeriesOptionsType[]
};


  constructor() {
    this.HighCharts = HighCharts;
  }

  ngOnInit(): void {
    if (this.label === 'New Users') {
      this.chartOptions.series = [{
        name: 'Series 1',
        data: [10, 20, 30, 40, 50]
      }] as Highcharts.SeriesOptionsType[];
    } else if (this.label === 'Users retention') {
      this.chartOptions.series = [{
        name: 'Series 2',
        data: [12, 20, 30, 45, 50]
      }] as Highcharts.SeriesOptionsType[];
    } else if (this.label === 'Users engagement') {
      this.chartOptions.series = [{
        name: 'Series 3',
        data: [5, 15, 28, 46, 50]
      }] as Highcharts.SeriesOptionsType[];
    } else if (this.label === 'Referral') {
      this.chartOptions.series = [{
        name: 'Series 4',
        data: [0, 18, 26, 38, 50]
      }] as Highcharts.SeriesOptionsType[];
    }
  }

}
