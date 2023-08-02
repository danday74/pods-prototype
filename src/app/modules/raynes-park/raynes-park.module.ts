import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RaynesParkComponent } from './components/raynes-park/raynes-park.component'
import { GoogleMapsModule } from '@angular/google-maps'

@NgModule({
  declarations: [
    RaynesParkComponent
  ],
  exports: [
    RaynesParkComponent
  ],
  imports: [
    CommonModule,
    GoogleMapsModule
  ]
})
export class RaynesParkModule {}
