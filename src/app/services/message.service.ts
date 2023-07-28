import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'
import { IMessage } from '../interfaces/i-message'

@Injectable({providedIn: 'root'})
export class MessageService {
    private messageSource = new Subject<IMessage>()
    message$ = this.messageSource.asObservable()

    message(msg: IMessage) {
        this.messageSource.next(msg)
    }
}
