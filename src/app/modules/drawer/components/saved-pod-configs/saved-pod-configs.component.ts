import { Component, OnInit } from '@angular/core'
import { ISavedPodConfig } from '../../../../interfaces/i-saved-pod-config'
import { DestroyerComponent } from '../../../destroyer/destroyer.component'
import { filter, takeUntil } from 'rxjs'
import { IMessage } from '../../../../interfaces/i-message'
import { MessageService } from '../../../../services/message.service'
import { StorageService } from '../../../../services/storage.service'

@Component({
  selector: 'app-saved-pod-configs',
  templateUrl: './saved-pod-configs.component.html',
  styleUrls: ['./saved-pod-configs.component.scss']
})
export class SavedPodConfigsComponent extends DestroyerComponent implements OnInit {
  savedPodConfigs: ISavedPodConfig[] = this.storageService.getItem('saved-pod-configs-gridstack', [])

  constructor(private messageService: MessageService, private storageService: StorageService) {
    super()
  }

  ngOnInit() {
    this.messageService.message$.pipe(
      takeUntil(this.unsubscribe$),
      filter((message: IMessage) => message.name === 'saved-pod-configs-gridstack')
    ).subscribe((message: IMessage) => {
      this.savedPodConfigs = message.payload
    })
  }

  activateSavedPodConfig(savedPodConfig: ISavedPodConfig) {
    this.messageService.message('activate-saved-pod-config-gridstack', savedPodConfig)
  }

  deleteSavedPodConfig(savedPodConfig: ISavedPodConfig) {
    let savedPodConfigs: ISavedPodConfig[] = this.savedPodConfigs
    savedPodConfigs = savedPodConfigs.filter((spc: ISavedPodConfig) => spc.name !== savedPodConfig.name)
    this.storageService.setItem('saved-pod-configs-gridstack', savedPodConfigs)
    this.messageService.message('saved-pod-configs-gridstack', savedPodConfigs)
  }
}
