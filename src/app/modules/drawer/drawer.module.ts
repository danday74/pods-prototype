import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DrawerComponent } from './components/drawer/drawer.component'
import { DropdownModule } from 'primeng/dropdown'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    DrawerComponent
  ],
  exports: [
    DrawerComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule
  ]
})
export class DrawerModule {}
