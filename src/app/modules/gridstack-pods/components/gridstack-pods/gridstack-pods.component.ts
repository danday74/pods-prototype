import { AfterViewInit, Component, OnInit } from '@angular/core'
import { GridItemHTMLElement, GridStack, GridStackElement, GridStackNode, GridStackWidget } from 'gridstack'
import { IPod } from '../../../../interfaces/i-pod'
import { getPods } from 'src/app/data/pods'
import { GridstackComponent, NgGridStackOptions, NgGridStackWidget } from 'gridstack/dist/angular'
import { PodComponent } from '../../../pod/components/pod/pod.component'
import { MessageService } from '../../../../services/message.service'
import { DestroyerComponent } from '../../../destroyer/destroyer.component'
import { filter, takeUntil } from 'rxjs'
import { IMessage } from '../../../../interfaces/i-message'
import { IPodPosition } from '../../../../interfaces/i-pod-position'
import { StorageService } from '../../../../services/storage.service'
import { find, sortBy } from 'lodash-es'
import { ISavedPodConfig } from '../../../../interfaces/i-saved-pod-config'

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
      filter((message: IMessage) => message.name === 'activate-saved-pod-config-gridstack' || message.name === 'add-pod' || message.name === 'delete-pod' || message.name === 'extra-pods' || (message.name === 'save-pods-apply' && message.payload.type === 'gridstack'))
    ).subscribe((message: IMessage) => {
      switch (message.name) {
        case 'activate-saved-pod-config-gridstack':
          this.activateSavedPodConfig(message.payload)
          break
        case 'add-pod':
          this.addPod(message.payload)
          break
        case 'delete-pod':
          this.deletePod(message.payload)
          break
        case 'extra-pods':
          this.updateInactivePods()
          break
        case 'save-pods-apply':
          this.savePodConfig(message.payload.name)
          break
      }
    })
  }

  ngAfterViewInit() {
    this.initGridStack()
    setTimeout(() => {
      this.updateInactivePods()
    })
  }

  private activateSavedPodConfig(savedPodConfig: ISavedPodConfig) {
    this.grid.removeAll()
    this.grid.batchUpdate(true)
    savedPodConfig.podPositions.forEach((podPosition: IPodPosition) => {
      const pods: IPod[] = getPods()
      const pod: IPod = find(pods, {id: podPosition.id})
      const widget: NgGridStackWidget = this.getWidget(pod, podPosition)
      if (widget) this.grid.addWidget(widget)
    })
    this.grid.batchUpdate(false)
    this.saveCurrentPodConfig()
  }

  private addPod(pod: IPod) {
    if (pod) {
      const podPosition: IPodPosition = {id: pod.id, x: null, y: null, w: 1, h: 1}
      const widget: NgGridStackWidget = this.getWidget(pod, podPosition)
      if (widget) this.grid.addWidget(widget)
      this.saveCurrentPodConfig()
    }
  }

  private deletePod(pod: GridStackElement) {
    this.grid.removeWidget(pod)
    this.saveCurrentPodConfig()
  }

  private savePodConfig(name: string) {
    const podPositions: IPodPosition[] = this.getPodPositions()
    let savedPodConfigs: ISavedPodConfig[] = this.storageService.getItem('saved-pod-configs-gridstack', [])
    savedPodConfigs = savedPodConfigs.filter((savedPodConfig: ISavedPodConfig) => savedPodConfig.name !== name)
    savedPodConfigs.push({name, podPositions})
    savedPodConfigs = sortBy(savedPodConfigs, [(savedPodConfig: ISavedPodConfig) => savedPodConfig.name.toLowerCase()])
    this.storageService.setItem(`saved-pod-configs-gridstack`, savedPodConfigs)
    this.messageService.message(`saved-pod-configs-gridstack`, savedPodConfigs)
  }

  private saveCurrentPodConfig() {
    const podPositions: IPodPosition[] = this.getPodPositions()
    this.storageService.setItem(`current-pod-config-gridstack`, podPositions)
    this.updateInactivePods()
  }

  private updateInactivePods() {
    const podPositions: IPodPosition[] = this.getPodPositions()
    const activePodIds: string[] = podPositions.map((podPosition: IPodPosition) => podPosition.id)
    const pods: IPod[] = getPods()
    const inactivePods: IPod[] = pods.filter((pod: IPod) => !activePodIds.includes(pod.id))
    const podz: IPod[] = sortBy(inactivePods, ['id'])
    const willItFit: boolean = this.willItFit()
    this.messageService.message('inactive-pods', {pods: podz, willItFit})
  }

  private willItFit(): boolean {
    const pod: GridStackWidget = {w: 1, h: 1}
    return this.grid.willItFit(pod)
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
      this.saveCurrentPodConfig()
    })
  }

  private initPods(): NgGridStackWidget[] {

    let podPositions: IPodPosition[] = this.storageService.getItem(`current-pod-config-gridstack`)

    if (!podPositions) {
      const pods: IPod[] = getPods().filter((pod: IPod) => !pod.addedByHuman).slice(0, 9)
      podPositions = pods.map((pod: IPod, i: number) => {
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
      const pods: IPod[] = getPods()
      const pod: IPod = find(pods, {id: podPosition.id})
      return this.getWidget(pod, podPosition)
    }).filter((widget: NgGridStackWidget) => widget != null)
  }

  private getWidget(pod: IPod, podPosition: IPodPosition): NgGridStackWidget {
    if (pod == null) return null
    const {x, y, w, h} = podPosition
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
  }
}
