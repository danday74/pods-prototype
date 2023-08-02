import { Injectable } from '@angular/core'
import * as Highcharts from 'highcharts'

@Injectable({providedIn: 'root'})
export class InitService {

  init(): Promise<boolean> {
    Highcharts.setOptions({
      colors: Highcharts.map(Highcharts.getOptions().colors, (color: any) => {
        // noinspection JSUnresolvedReference
        return {
          radialGradient: {
            cx: 0.5,
            cy: 0.3,
            r: 0.7
          },
          stops: [
            [0, color],
            [1, Highcharts.color(color).brighten(-0.3).get('rgb')]
          ]
        }
      })
    })
    return Promise.resolve(true)
  }
}
