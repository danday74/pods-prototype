import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PodComponent } from './components/pod/pod.component'

@NgModule({
    declarations: [
        PodComponent
    ],
    exports: [
        PodComponent
    ],
    imports: [
        CommonModule
    ]
})
export class PodModule {}
