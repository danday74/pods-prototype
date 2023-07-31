import { Component } from '@angular/core'
import { MessageService } from '../../../../services/message.service'

@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.scss']
})
export class Route2Component {

  constructor(private messageService: MessageService) {}

  save() {
    this.messageService.message('save-pods', {type: 'gridstack'})
  }
}
