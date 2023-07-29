import { AfterViewInit, Component, OnInit } from '@angular/core'
import { GridItemHTMLElement, GridStack, GridStackElement, GridStackNode } from 'gridstack'
import { IPod } from '../../../../interfaces/i-pod'
import { pods } from 'src/app/data/pods'
import { GridstackComponent, NgGridStackOptions, NgGridStackWidget } from 'gridstack/dist/angular'
import { PodComponent } from '../../../pod/components/pod/pod.component'
import { MessageService } from '../../../../services/message.service'
import { DestroyerComponent } from '../../../destroyer/destroyer.component'
import { filter, takeUntil } from 'rxjs'
import { IMessage } from '../../../../interfaces/i-message'
import { IPodPosition } from '../../../../interfaces/i-pod-position'
import { StorageService } from '../../../../services/storage.service'
import { find, sortBy } from 'lodash-es'

@Component({
  selector: 'app-gridstack-pods',
  templateUrl: './gridstack-pods.component.html',
  styleUrls: ['./gridstack-pods.component.scss']
})
export class GridstackPodsComponent extends DestroyerComponent implements OnInit, AfterViewInit {

  grid: GridStack

  public gridOptions: NgGridStackOptions = {
    cellHeight: 198,
    column: 3,
    disableOneColumnMode: true,
    float: true,
    margin: '10 15',
    row: 3,
    children: this.initPods()
  }

  constructor(private messageService: MessageService, private storageService: StorageService) {
    super()
  }

  ngOnInit() {
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

  private deletePod(pod: GridStackElement) {
    this.grid.removeWidget(pod)
    this.saveCurrentPods()
  }

  private savePods(savePodsConfigName: string) {
    const podPositions: IPodPosition[] = this.getPodPositions()
    this.storageService.setItem(`pods-config-gridstack-${savePodsConfigName}`, podPositions)
  }

  private saveCurrentPods() {
    const podPositions: IPodPosition[] = this.getPodPositions()
    this.storageService.setItem(`pods-config-gridstack-xxx-current-xxx`, podPositions)
  }

  private getPodPositions(): IPodPosition[] {
    const els: GridItemHTMLElement[] = this.grid.getGridItems()
    const nodes: GridStackNode[] = els.map((el: GridItemHTMLElement) => el.gridstackNode)
    const podPositions: IPodPosition[] = nodes.map((item: GridStackNode) => {
      const {x, y, w, h} = item
      const id: string = item.id.replace(/-light$/, '').replace(/-dark$/, '')
      return {id, x, y, w, h}
    })
    return sortBy(podPositions, ['id'])
  }

  private initGridStack() {
    this.grid = GridStack.init()
    this.grid.on('change', (/* evt: Event, nodes: GridStackNode[] */) => {
      this.saveCurrentPods()
    })
  }

  private initPods(): NgGridStackWidget[] {

    let podPositions: IPodPosition[] = this.storageService.getItem(`pods-config-gridstack-xxx-current-xxx`)

    if (!podPositions) {
      const podz: IPod[] = pods.slice(0, 9)
      podPositions = podz.map((pod: IPod, i: number) => {
        const podPosition: IPodPosition = {
          x: i % 3,
          y: Math.floor(i / 3),
          w: 1,
          h: 1,
          id: pod.id
        }
        return podPosition
      })
    }

    return podPositions.map((podPosition: IPodPosition) => {
      const {id, x, y, w, h} = podPosition
      const pod: IPod = find(pods, {id})
      const widget: NgGridStackWidget = {
        x,
        y,
        w,
        h,
        selector: 'app-pod',
        input: {pod, cssClass: 'gridstack'},
        id: `${pod.id}-${pod.dark ? 'dark' : 'light'}`
      }
      return widget
    })
  }
}