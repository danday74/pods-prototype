import { Component } from '@angular/core'
import { ILatLng } from '../../../../interfaces/i-lat-lng'
import { IGoogleMapsMarker } from '../../../../interfaces/i-google-maps-marker'

// https://timdeschryver.dev/blog/google-maps-as-an-angular-component

@Component({
  selector: 'app-raynes-park',
  templateUrl: './raynes-park.component.html',
  styleUrls: ['./raynes-park.component.scss']
})
export class RaynesParkComponent {

  center: ILatLng = {lat: 51.410110, lng: -0.234530}

  options: google.maps.MapOptions = {
    zoomControl: true,
    streetViewControl: false,
    disableDoubleClickZoom: false,
    mapTypeId: 'hybrid',
    maxZoom: 20,
    minZoom: 8
  }

  zoom = 12

  markers: IGoogleMapsMarker[] = [{
    position: {
      lat: this.center.lat,
      lng: this.center.lng
    },
    title: 'Visit our Raynes Park Office',
    options: {animation: google.maps.Animation.DROP}
  }]
}
