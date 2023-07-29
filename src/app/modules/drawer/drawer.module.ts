import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DrawerComponent } from './components/drawer/drawer.component'

@NgModule({
  declarations: [
    DrawerComponent
  ],
  exports: [
    DrawerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DrawerModule {}
