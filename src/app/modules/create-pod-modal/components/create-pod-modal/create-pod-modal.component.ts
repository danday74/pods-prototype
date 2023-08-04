import { Component, EventEmitter, Output } from '@angular/core'
import { IPod } from '../../../../interfaces/i-pod'
import { kebabCase } from 'lodash-es'
import { getRandomNumber } from '../../../../utils/number-utils'
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-create-pod-modal',
  templateUrl: './create-pod-modal.component.html',
  styleUrls: ['./create-pod-modal.component.scss']
})
export class CreatePodModalComponent {

  go = false
  stats = false
  pod: IPod = {
    id: null,
    text: null,
    type: 'normal',
    number: null,
    buttonText: 'View',
    dark: false,
    addedByHuman: true
  }

  @Output() cancel = new EventEmitter<void>()
  @Output() create = new EventEmitter<IPod>()

  constructor(private toastr: ToastrService) {}

  cancelCreatePod() {
    this.cancel.emit()
  }

  createPod() {
    if (this.pod.text && this.pod.text.trim().length) {
      const text: string = this.pod.text.trim()
      this.pod = {
        ...this.pod,
        id: kebabCase(text),
        text,
        number: this.stats ? getRandomNumber(99) : null
      }
      this.create.emit(this.pod)
      this.toastr.success(`Your new pod <strong>${this.pod.text}</strong> is available in the <strong>Add Pod</strong> dropdown`, 'Create Pod')
    }
  }

  toggleViewGo() {
    this.go = !this.go
    this.pod.buttonText = this.go ? 'Go' : 'View'
  }

  toggleStats() {
    this.stats = !this.stats
    this.pod.number = this.stats ? 99 : null
  }

  clickSun() {
    this.pod.dark = false
  }

  clickMoon() {
    this.pod.dark = true
  }

  clickView() {
    this.go = false
    this.pod.buttonText = 'View'
  }

  clickGo() {
    this.go = true
    this.pod.buttonText = 'Go'
  }

  clickStatsOff() {
    this.stats = false
    this.pod.number = null
  }

  clickStatsOn() {
    this.stats = true
    this.pod.number = 99
  }
}
