import { Component } from '@angular/core'
import { pods } from '../../../../data/pods'
import { IPod } from '../../../../interfaces/i-pod'

@Component({
    selector: 'app-pods',
    templateUrl: './pods.component.html',
    styleUrls: ['./pods.component.scss']
})
export class PodsComponent {
    pods: IPod[] = pods.filter((pod: IPod) => pod.active)
}
