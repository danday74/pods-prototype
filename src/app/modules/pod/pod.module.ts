import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PodComponent } from './components/pod/pod.component'
import { MatRippleModule } from '@angular/material/core'

@NgModule({
    declarations: [
        PodComponent
    ],
    exports: [
        PodComponent
    ],
  imports: [
    CommonModule,
    MatRippleModule
  ]
})
export class PodModule {}
