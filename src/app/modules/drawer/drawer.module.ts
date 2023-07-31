import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DrawerComponent } from './components/drawer/drawer.component'
import { DropdownModule } from 'primeng/dropdown'
import { FormsModule } from '@angular/forms'
import { SavedPodConfigsComponent } from './components/saved-pod-configs/saved-pod-configs.component'
import { MatRippleModule } from '@angular/material/core'

@NgModule({
  declarations: [
    DrawerComponent,
    SavedPodConfigsComponent
  ],
  exports: [
    DrawerComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    MatRippleModule
  ]
})
export class DrawerModule {}
