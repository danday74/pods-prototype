import { Component } from '@angular/core'
import * as Highcharts from 'highcharts'
import { getYear, subYears } from 'date-fns'

@Component({
  selector: 'app-route3',
  templateUrl: './route3.component.html',
  styleUrls: ['./route3.component.scss']
})
export class Route3Component {

  options2: Highcharts.Options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Business Activity'
    },
    credits: {
      enabled: false
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          connectorColor: 'silver'
        }
      }
    },
    series: [{
      type: 'pie',
      name: 'Share',
      data: [
        {name: 'Interviews', y: 60},
        {name: 'Admin', y: 30},
        {name: 'Holidays', y: 10}
      ]
    }]
  }

  private readonly lastYear: number = getYear(subYears(new Date(), 1))
  options1: Highcharts.Options = {
    chart: {
      type: 'column'
    },
    title: {
      text: `Performance compared to ${this.lastYear}`
    },
    xAxis: {
      categories: ['Mar', 'Apr', 'May', 'Jun', 'Jul']
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      column: {
        borderRadius: '10%'
      }
    },
    series: [{
      name: 'John',
      data: [5, 3, 4, 7, 2],
      type: 'column'
    }, {
      name: 'Jane',
      data: [2, -2, -3, 2, 1],
      type: 'column'
    }, {
      name: 'Joe',
      data: [3, 4, 4, -2, 5],
      type: 'column'
    }]
  }
}
