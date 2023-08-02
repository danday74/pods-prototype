import { ILatLng } from './i-lat-lng'

export interface IGoogleMapsMarker {
  position: ILatLng
  label: {
    color: string
    text: string
  }
  title: string
  options: {
    animation: google.maps.Animation
  }
}
