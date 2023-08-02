import { Component, Input } from '@angular/core'
import * as Highcharts from 'highcharts'

// https://github.com/highcharts/highcharts-angular

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent {

  @Input({required: true}) options: Highcharts.Options

  Highcharts: typeof Highcharts = Highcharts
  chartConstructor = 'chart'
  updateFlag = false
  oneToOneFlag = true
  runOutsideAngular = false

  chartCallback: Highcharts.ChartCallbackFunction = function (chart: Highcharts.Chart) {
    console.log('Highcharts.ChartCallbackFunction', chart)
  }
}
