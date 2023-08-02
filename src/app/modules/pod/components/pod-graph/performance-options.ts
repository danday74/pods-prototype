import * as Highcharts from 'highcharts'
import { cloneDeep, merge } from 'lodash-es'
import { defaultGraphOptions } from './default-graph-options'

export const performanceOptions: Highcharts.Options = merge(cloneDeep(defaultGraphOptions), {
  chart: {
    type: 'column',
    options3d: {
      alpha: 15,
      beta: 15,
      depth: 100,
      viewDistance: 25
    }
  },
  legend: {
    enabled: false // this is set dynamically in graph.component.ts
  },
  plotOptions: {
    column: {
      borderRadius: '10%'
    }
  },
  title: {
    text: `Performance`
  },
  xAxis: {
    categories: ['Mar', 'Apr', 'May', 'Jun', 'Jul']
  },
  yAxis: {
    title: {
      text: null
    },
    visible: false
  },
  series: [
    {
      name: 'Sales',
      data: [5, 3, 4, 7, 2],
      type: 'column'
    },
    {
      name: 'Marketing',
      data: [2, -2, -3, 2, 1],
      type: 'column'
    },
    {
      name: 'Finance',
      data: [3, 4, 4, -2, 5],
      type: 'column'
    }
  ]
})
