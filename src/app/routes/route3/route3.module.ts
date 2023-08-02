import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Route3RoutingModule } from './route3-routing.module'
import { Route3Component } from './components/route3/route3.component'
import { GraphModule } from '../../modules/graph/graph.module'

@NgModule({
  declarations: [
    Route3Component
  ],
  imports: [
    CommonModule,
    Route3RoutingModule,
    GraphModule
  ]
})
export class Route3Module {}
