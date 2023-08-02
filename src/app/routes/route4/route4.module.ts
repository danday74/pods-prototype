import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Route4RoutingModule } from './route4-routing.module'
import { Route4Component } from './components/route4/route4.component'
import { RaynesParkModule } from '../../modules/raynes-park/raynes-park.module'

@NgModule({
  declarations: [
    Route4Component
  ],
  imports: [
    CommonModule,
    Route4RoutingModule,
    RaynesParkModule
  ]
})
export class Route4Module {}
