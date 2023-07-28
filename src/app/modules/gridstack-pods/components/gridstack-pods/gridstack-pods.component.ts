import { AfterViewInit, Component, OnInit } from '@angular/core'
import { GridStack, GridStackElement } from 'gridstack'
import { IPod } from '../../../../interfaces/i-pod'
import { pods } from 'src/app/data/pods'
import { GridstackComponent, NgGridStackOptions, NgGridStackWidget } from 'gridstack/dist/angular'
import { PodComponent } from '../../../pod/components/pod/pod.component'
import { MessageService } from '../../../../services/message.service'
import { DestroyerComponent } from '../../../destroyer/destroyer.component'
import { filter, takeUntil } from 'rxjs'
import { IMessage } from '../../../../interfaces/i-message'

@Component({
  selector: 'app-gridstack-pods',
  templateUrl: './gridstack-pods.component.html',
  styleUrls: ['./gridstack-pods.component.scss']
})
export class GridstackPodsComponent extends DestroyerComponent implements OnInit, AfterViewInit {

  grid: GridStack

  public gridOptions: NgGridStackOptions = {
    // acceptWidgets: true,
    cellHeight: 198,
    column: 3,
    float: true,
    margin: '10 15',
    row: 3,
    children: pods.filter((pod: IPod) => pod.active).map((pod: IPod, i: number) => {
      const widget: NgGridStackWidget = {
        x: i % 3,
        y: Math.floor(i / 3),
        selector: 'app-pod',
        input: {pod, cssClass: 'gridstack'},
        id: `${pod.id}-${pod.dark ? 'dark' : 'light'}`
      }
      return widget
    })
  }

  constructor(private messageService: MessageService) {
    super()
  }

  ngOnInit() {
    // this.initGridStack()
    GridstackComponent.addComponentToSelectorType([PodComponent])

    this.messageService.message$.pipe(
      takeUntil(this.unsubscribe$),
      filter((message: IMessage) => message.name === 'delete-pod' || (message.name === 'save-pods-apply' && message.payload.type === 'gridstack'))
    ).subscribe((message: IMessage) => {
      switch (message.name) {
        case 'delete-pod':
          this.deletePod(message.payload)
          break
        case 'save-pods-apply':
          this.savePods(message.payload.name)
          break
      }
    })
  }

  ngAfterViewInit() {
    this.initGridStack()
  }

  private initGridStack() {
    this.grid = GridStack.init()
  }

  private deletePod(pod: GridStackElement) {
    this.grid.removeWidget(pod)
  }

  private savePods(savePodsConfigName: string) {
    console.log('savePodsConfigName', savePodsConfigName)
    const items: any[] = this.grid.getGridItems()
    console.log(items)
  }
}
