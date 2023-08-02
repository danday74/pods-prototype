import { Component, Input } from '@angular/core'
import { IPod } from '../../../../interfaces/i-pod'
import { BaseWidget, NgCompInputs } from 'gridstack/dist/angular'
import { GridStackWidget } from 'gridstack'
import { MessageService } from '../../../../services/message.service'

@Component({
  selector: 'app-pod-map',
  templateUrl: './pod-map.component.html',
  styleUrls: ['./pod-map.component.scss']
})
export class PodMapComponent extends BaseWidget {
  @Input({required: true}) pod: IPod
  @Input() cssClass = ''

  constructor(private messageService: MessageService) {
    super()
  }

  public override serialize(): NgCompInputs | undefined { return this.pod ? {pod: this.pod} : undefined }

  delete(evt: MouseEvent) {
    const btn: HTMLButtonElement = evt.target as HTMLButtonElement
    const widget: GridStackWidget = btn.closest('.grid-stack-item')
    if (widget) this.messageService.message('delete-pod', widget)
  }
}
