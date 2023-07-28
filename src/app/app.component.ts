import { Component, OnInit } from '@angular/core'
import { DestroyerComponent } from './modules/destroyer/destroyer.component'
import { filter, takeUntil } from 'rxjs'
import { IMessage } from './interfaces/i-message'
import { MessageService } from './services/message.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends DestroyerComponent implements OnInit {

  showSavePodsModal = false
  savePodsType: string

  constructor(private messageService: MessageService) {
    super()
  }

  ngOnInit() {
    this.messageService.message$.pipe(
      takeUntil(this.unsubscribe$),
      filter((message: IMessage) => message.name === 'save-pods')
    ).subscribe((message: IMessage) => {
      this.savePods(message.payload.type)
    })
  }

  cancelSavePods() {
    this.showSavePodsModal = false
  }

  applySavePods(name: string) {
    this.showSavePodsModal = false
    this.messageService.message({name: 'save-pods-apply', payload: {name, type: this.savePodsType}})
  }

  private savePods(type: string) {
    this.savePodsType = type
    this.showSavePodsModal = true
  }
}
