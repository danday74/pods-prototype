import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PodsComponent } from './components/pods/pods.component'
import { PodModule } from '../pod/pod.module'

@NgModule({
    declarations: [
        PodsComponent
    ],
    exports: [
        PodsComponent
    ],
    imports: [
        CommonModule,
        PodModule
    ]
})
export class PodsModule {}
