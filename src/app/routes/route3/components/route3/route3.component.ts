import { Component } from '@angular/core'
import * as Highcharts from 'highcharts'
import { businessActivityOptions } from '../../../../modules/pod/components/pod-graph/business-activity-options'
import { performanceOptions } from '../../../../modules/pod/components/pod-graph/performance-options'

@Component({
  selector: 'app-route3',
  templateUrl: './route3.component.html',
  styleUrls: ['./route3.component.scss']
})
export class Route3Component {
  businessActivityOptions: Highcharts.Options = businessActivityOptions
  performanceOptions: Highcharts.Options = performanceOptions
}
