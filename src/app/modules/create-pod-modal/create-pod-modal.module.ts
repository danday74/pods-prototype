import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CreatePodModalComponent } from './components/create-pod-modal/create-pod-modal.component'
import { FormsModule } from '@angular/forms'
import { PodModule } from '../pod/pod.module'

@NgModule({
  declarations: [
    CreatePodModalComponent
  ],
  exports: [
    CreatePodModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PodModule
  ]
})
export class CreatePodModalModule {}
