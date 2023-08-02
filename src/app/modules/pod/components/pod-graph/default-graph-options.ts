import * as Highcharts from 'highcharts'

export const defaultGraphOptions: Highcharts.Options = {
  chart: {
    backgroundColor: 'transparent',
    options3d: {
      enabled: true
    },
    spacing: [10, 20, 10, 20]
  },
  accessibility: {
    enabled: false
  },
  credits: {
    enabled: false
  },
  exporting: {
    buttons: {
      contextButton: {
        menuItems: ['viewFullscreen', 'downloadPNG', 'downloadPDF']
      }
    }
  },
  navigation: {
    buttonOptions: {
      align: 'left',
      enabled: true
    }
  },
  title: {
    style: {
      fontSize: '18px'
    }
  }
}
