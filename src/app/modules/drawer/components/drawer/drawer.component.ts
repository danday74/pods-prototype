import { Component, OnInit } from '@angular/core'
import { MessageService } from '../../../../services/message.service'
import { StorageService } from '../../../../services/storage.service'
import { IPod } from '../../../../interfaces/i-pod'
import { filter, takeUntil } from 'rxjs'
import { IMessage } from '../../../../interfaces/i-message'
import { DestroyerComponent } from '../../../destroyer/destroyer.component'

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent extends DestroyerComponent implements OnInit {
  inactivePods: IPod[] = []
  inactivePod: IPod
  willItFit = false

  open = this.storageService.getItem('drawer-open', false)

  constructor(private messageService: MessageService, private storageService: StorageService) {
    super()
  }

  ngOnInit() {
    this.messageService.message$.pipe(
      takeUntil(this.unsubscribe$),
      filter((message: IMessage) => message.name === 'inactive-pods')
    ).subscribe((message: IMessage) => {
      this.inactivePods = message.payload.pods
      this.willItFit = message.payload.willItFit
    })
  }

  toggle() {
    this.open = !this.open
    this.messageService.message('drawer', {open: this.open})
    this.storageService.setItem('drawer-open', this.open)
  }

  activatePod(pod: IPod) {
    this.messageService.message('add-pod', pod)
    this.inactivePod = {id: null, text: 'Add Pod', number: null, buttonText: null, dark: null}
  }
}
