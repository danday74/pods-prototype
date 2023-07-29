import { Injectable } from '@angular/core'

@Injectable({providedIn: 'root'})
export class StorageService {
  setItem(key: string, value: any) {
    const strValue: string = JSON.stringify(value)
    localStorage.setItem(key, strValue)
  }

  getItem(key: string, def: any = null): any {
    const value: string = localStorage.getItem(key)
    return value ? JSON.parse(value) : def
  }
}
