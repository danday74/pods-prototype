import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core'
import * as Highcharts from 'highcharts'

// https://github.com/highcharts/highcharts-angular

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements AfterViewInit, OnDestroy {

  @Input({required: true}) options: Highcharts.Options

  Highcharts: typeof Highcharts = Highcharts
  chartConstructor = 'chart'
  updateFlag = false
  oneToOneFlag = true
  runOutsideAngular = false

  private chart: Highcharts.Chart
  private interval: any

  chartCallback: Highcharts.ChartCallbackFunction = (chart: Highcharts.Chart) => {
    if (!this.chart) this.chart = chart
  }

  ngAfterViewInit() {
    this.interval = setInterval(() => {
      const chartType: string = this.chart.userOptions.chart.type
      if (chartType === 'column' && this.chart.userOptions.legend) {
        const currentLegendEnabled: boolean = this.chart.userOptions.legend.enabled
        const desiredLegendEnabled: boolean = this.chart.chartHeight >= 278
        if (currentLegendEnabled !== desiredLegendEnabled) this.chart.update({legend: {enabled: desiredLegendEnabled}})
      }
      this.chart.reflow()
    }, 1)
  }

  ngOnDestroy() {
    clearInterval(this.interval)
  }
}
