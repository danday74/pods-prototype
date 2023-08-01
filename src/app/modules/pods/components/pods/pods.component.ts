import { Component } from '@angular/core'
import { getPods } from '../../../../data/pods'
import { IPod } from '../../../../interfaces/i-pod'

@Component({
  selector: 'app-pods',
  templateUrl: './pods.component.html',
  styleUrls: ['./pods.component.scss']
})
export class PodsComponent {
  pods: IPod[] = getPods().filter((pod: IPod) => !pod.addedByHuman).slice(0, 9)
}
