import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Route2RoutingModule } from './route2-routing.module'
import { Route2Component } from './components/route2/route2.component'
import { GridstackPodsModule } from '../../modules/gridstack-pods/gridstack-pods.module'
import { DrawerModule } from '../../modules/drawer/drawer.module'

@NgModule({
  declarations: [
    Route2Component
  ],
  imports: [
    CommonModule,
    Route2RoutingModule,
    GridstackPodsModule,
    DrawerModule
  ]
})
export class Route2Module {}
