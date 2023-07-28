import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { GridstackPodsComponent } from './components/gridstack-pods/gridstack-pods.component'
import { PodModule } from '../pod/pod.module'
import { GridstackModule } from 'gridstack/dist/angular'

@NgModule({
  declarations: [
    GridstackPodsComponent
  ],
  exports: [
    GridstackPodsComponent
  ],
  imports: [
    CommonModule,
    PodModule,
    GridstackModule
  ]
})
export class GridstackPodsModule {}
