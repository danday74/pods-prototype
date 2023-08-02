import { Component, Input, OnInit } from '@angular/core'
import { IPod } from '../../../../interfaces/i-pod'
import { businessActivityOptions } from './business-activity-options'
import * as Highcharts from 'highcharts'
import { BaseWidget, NgCompInputs } from 'gridstack/dist/angular'
import { performanceOptions } from './performance-options'
import { GridStackWidget } from 'gridstack'
import { MessageService } from '../../../../services/message.service'

@Component({
  selector: 'app-pod-graph',
  templateUrl: './pod-graph.component.html',
  styleUrls: ['./pod-graph.component.scss']
})
export class PodGraphComponent extends BaseWidget implements OnInit {
  @Input({required: true}) pod: IPod
  @Input() cssClass = ''

  options: Highcharts.Options

  constructor(private messageService: MessageService) {
    super()
  }

  public override serialize(): NgCompInputs | undefined { return this.pod ? {pod: this.pod} : undefined }

  ngOnInit() {
    if (this.pod.text === 'Business Activity Graph') this.options = businessActivityOptions
    if (this.pod.text === 'Performance Graph') this.options = performanceOptions
    if (this.options == null) throw Error('pod graph options unset')
  }

  delete(evt: MouseEvent) {
    const btn: HTMLButtonElement = evt.target as HTMLButtonElement
    const widget: GridStackWidget = btn.closest('.grid-stack-item')
    if (widget) this.messageService.message('delete-pod', widget)
  }
}
