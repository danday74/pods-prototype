import { Component } from '@angular/core'
import * as Highcharts from 'highcharts'

@Component({
  selector: 'app-route3',
  templateUrl: './route3.component.html',
  styleUrls: ['./route3.component.scss']
})
export class Route3Component {
  options1: Highcharts.Options = {
    series: [{
      data: [1, 2, 3],
      type: 'line'
    }]
  }
  options2: Highcharts.Options = {
    series: [{
      data: [1, 3, 1],
      type: 'line'
    }]
  }
}
