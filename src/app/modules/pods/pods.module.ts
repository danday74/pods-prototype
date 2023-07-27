import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PodsComponent } from './components/pods/pods.component'

@NgModule({
    declarations: [
        PodsComponent
    ],
    exports: [
        PodsComponent
    ],
    imports: [
        CommonModule
    ]
})
export class PodsModule {}
