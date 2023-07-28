import { Component, EventEmitter, Input, Output } from '@angular/core'
import { IPod } from '../../../../interfaces/i-pod'
import { BaseWidget, NgCompInputs } from 'gridstack/dist/angular'
import { GridStackWidget } from 'gridstack'
import { MessageService } from '../../../../services/message.service'

@Component({
    selector: 'app-pod',
    templateUrl: './pod.component.html',
    styleUrls: ['./pod.component.scss']
})
export class PodComponent extends BaseWidget {
    @Input({required: true}) pod: IPod
    @Input() cssClass = ''
    @Output() deletePod = new EventEmitter<GridStackWidget>()

    constructor(private messageService: MessageService) {
        super()
    }

    public override serialize(): NgCompInputs | undefined { return this.pod ? {pod: this.pod} : undefined }

    delete(evt: MouseEvent) {
        const btn: HTMLButtonElement = evt.target as HTMLButtonElement
        const widget: GridStackWidget = btn.closest('.grid-stack-item')
        this.messageService.message({name: 'delete-pod', payload: widget})
    }
}
