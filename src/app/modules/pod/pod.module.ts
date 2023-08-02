import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PodComponent } from './components/pod/pod.component'
import { MatRippleModule } from '@angular/material/core'
import { PodGraphComponent } from './components/pod-graph/pod-graph.component'
import { PodMapComponent } from './components/pod-map/pod-map.component'
import { RaynesParkModule } from '../raynes-park/raynes-park.module'
import { GraphModule } from '../graph/graph.module'

@NgModule({
  declarations: [
    PodComponent,
    PodGraphComponent,
    PodMapComponent
  ],
  exports: [
    PodComponent,
    PodGraphComponent,
    PodMapComponent
  ],
  imports: [
    CommonModule,
    MatRippleModule,
    RaynesParkModule,
    GraphModule
  ]
})
export class PodModule {}
