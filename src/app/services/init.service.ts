import { Injectable } from '@angular/core'
import * as Highcharts from 'highcharts'
import * as Color from 'color'
import { appColors } from '../utils/app-colors'
import { reduce } from 'lodash-es'
import HC_exporting from 'highcharts/modules/exporting'
import HC_3d from 'highcharts/highcharts-3d'

HC_exporting(Highcharts)
HC_3d(Highcharts)

@Injectable({providedIn: 'root'})
export class InitService {

  init(): Promise<boolean> {

    // const colors: string[] = Highcharts.getOptions().colors as string[]

    const colors: string[] = reduce(appColors, (acc: any, color: Color /*, key: string*/) => {
      // if (key === 'headerBlue') color = color.lighten(1)
      return [...acc, color.hex()]
    }, [])

    Highcharts.setOptions({
      colors: colors.map((color: any) => {
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
