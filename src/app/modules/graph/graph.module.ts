import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { GraphComponent } from './components/graph/graph.component'
import { HighchartsChartModule } from 'highcharts-angular'

@NgModule({
  declarations: [
    GraphComponent
  ],
  exports: [
    GraphComponent
  ],
  imports: [
    CommonModule,
    HighchartsChartModule
  ]
})
export class GraphModule {}
