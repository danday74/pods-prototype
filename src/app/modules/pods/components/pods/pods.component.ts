import { Component } from '@angular/core'
import { pods } from './pods'

@Component({
  selector: 'app-pods',
  templateUrl: './pods.component.html',
  styleUrls: ['./pods.component.scss']
})
export class PodsComponent {
  pods = pods
}
