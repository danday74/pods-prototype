import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SavePodsModalComponent } from './components/save-pods-modal/save-pods-modal.component'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    SavePodsModalComponent
  ],
  exports: [
    SavePodsModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SavePodsModalModule {}
