import * as Highcharts from 'highcharts'
import { defaultGraphOptions } from './default-graph-options'
import { cloneDeep, merge } from 'lodash-es'

export const businessActivityOptions: Highcharts.Options = merge(cloneDeep(defaultGraphOptions), {
  chart: {
    type: 'pie',
    options3d: {
      alpha: 45,
      beta: 0
    }
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      depth: 35,
      dataLabels: {
        connectorColor: 'silver',
        format: '<b>{point.name}</b>: {point.percentage:.0f}%'
      }
    }
  },
  title: {
    text: 'Business Activity'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  series: [{
    type: 'pie',
    name: 'Share',
    data: [
      {name: 'Holidays', y: 10},
      {name: 'Intern', y: 60},
      {name: 'Admin', y: 30}
    ]
  }]
})
