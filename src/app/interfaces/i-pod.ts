export interface IPod {
  id: string
  text: string
  type: 'normal' | 'graph' | 'map'
  number: number
  buttonText: 'Go' | 'View'
  dark: boolean
  addedByHuman: boolean
}
