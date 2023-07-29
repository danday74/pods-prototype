import { Component } from '@angular/core'
import { MessageService } from '../../../../services/message.service'
import { StorageService } from '../../../../services/storage.service'

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent {
  open = this.storageService.getItem('drawer-open', false)

  constructor(private messageService: MessageService, private storageService: StorageService) {}

  toggle() {
    this.open = !this.open
    this.messageService.message({name: 'drawer', payload: {open: this.open}})
    this.storageService.setItem('drawer-open', this.open)
  }
}
