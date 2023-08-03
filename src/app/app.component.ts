import { Component, OnInit } from '@angular/core'
import { DestroyerComponent } from './modules/destroyer/destroyer.component'
import { filter, takeUntil } from 'rxjs'
import { IMessage } from './interfaces/i-message'
import { MessageService } from './services/message.service'
import { StorageService } from './services/storage.service'
import { NavigationEnd, Router } from '@angular/router'
import { appConfig } from './app.config'
import { IAppConfig } from './interfaces/i-app-config'
import { IPod } from './interfaces/i-pod'
import { sortBy } from 'lodash-es'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends DestroyerComponent implements OnInit {
  appConfig: IAppConfig = appConfig
  showCreatePodModal = false
  showSavePodsModal = false
  savePodsType: string
  drawerOpen = this.storageService.getItem('drawer-open', false)
  year: number = new Date().getFullYear()

  private readonly ROUTE_CLASS_PREFIX = 'route-'

  constructor(private messageService: MessageService, private storageService: StorageService, private router: Router) {
    super()
  }

  ngOnInit() {

    this.router.events.pipe(
      takeUntil(this.unsubscribe$),
      filter((evt: any) => evt instanceof NavigationEnd)
    ).subscribe((evt: any) => {
      const event: NavigationEnd = evt as NavigationEnd
      const routeName: string = event.url.replace('/', '')
      this.addRouteClassToHtmlTag(routeName)
    })

    this.messageService.message$.pipe(
      takeUntil(this.unsubscribe$),
      filter((message: IMessage) => message.name === 'create-pod' || message.name === 'save-pods' || message.name === 'drawer')
    ).subscribe((message: IMessage) => {
      switch (message.name) {
        case 'create-pod':
          this.createPod()
          break
        case 'save-pods':
          this.savePods(message.payload.type)
          break
        case 'drawer':
          this.drawerOpen = message.payload.open
          break
      }
    })
  }

  cancelSavePods() {
    this.showSavePodsModal = false
  }

  applySavePods(name: string) {
    this.showSavePodsModal = false
    this.messageService.message('save-pods-apply', {name, type: this.savePodsType})
  }

  cancelCreatePod() {
    this.showCreatePodModal = false
  }

  applyCreatePod(pod: IPod) {
    this.showCreatePodModal = false
    let extraPods: IPod[] = this.storageService.getItem('extra-pods', [])
    extraPods = extraPods.filter((pd: IPod) => pd.id !== pod.id)
    extraPods.push(pod)
    extraPods = sortBy(extraPods, [(pod: IPod) => pod.text.toLowerCase()])
    this.storageService.setItem('extra-pods', extraPods)
    this.messageService.message('extra-pods')
  }

  private createPod() {
    this.showCreatePodModal = true
  }

  private savePods(type: string) {
    this.savePodsType = type
    this.showSavePodsModal = true
  }

  private addRouteClassToHtmlTag(clazz: string) {
    const root: HTMLHtmlElement = document.getElementsByTagName('html')[0]
    const classes: string[] = root.className.split(' ').filter((c: string) => !c.startsWith(this.ROUTE_CLASS_PREFIX))
    root.className = classes.join(' ').trim()
    root.classList.add(`${this.ROUTE_CLASS_PREFIX}${clazz}`)
    const changeClass = `${this.ROUTE_CLASS_PREFIX}change`
    root.classList.add(changeClass)
    setTimeout(() => {
      root.classList.remove(changeClass)
    }, 500)
  }
}
