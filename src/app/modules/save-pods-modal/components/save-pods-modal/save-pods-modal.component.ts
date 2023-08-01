import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-save-pods-modal',
  templateUrl: './save-pods-modal.component.html',
  styleUrls: ['./save-pods-modal.component.scss']
})
export class SavePodsModalComponent {
  @Input({required: true}) type: string
  @Output() apply = new EventEmitter<string>()
  @Output() cancel = new EventEmitter<void>()

  name: string

  cancelSavePods() {
    this.cancel.emit()
  }

  applySavePods() {
    if (this.name && this.name.trim().length > 0) {
      this.apply.emit(this.name.trim())
    }
  }
}
