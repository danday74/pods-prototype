import { IPod } from '../interfaces/i-pod'
import { kebabCase } from 'lodash-es'
import { getRandomNumber } from '../utils/number-utils'

const podz: IPod[] = [
  {
    id: null,
    text: 'New Jobs',
    number: 0,
    buttonText: 'Go',
    dark: true
  },
  {
    id: null,
    text: 'My Unfilled Jobs',
    number: 0,
    buttonText: 'View',
    dark: false
  },
  {
    id: null,
    text: 'In Progress Bookings',
    number: 0,
    buttonText: 'View',
    dark: false
  },
  {
    id: null,
    text: 'Messages',
    number: 0,
    buttonText: 'Go',
    dark: false
  },
  {
    id: null,
    text: 'Unsubmitted Timesheets',
    number: 0,
    buttonText: 'View',
    dark: false
  },
  {
    id: null,
    text: 'Unauthorised Timesheets',
    number: 0,
    buttonText: 'View',
    dark: false
  },
  {
    id: null,
    text: 'Rejected Timesheets',
    number: 0,
    buttonText: 'View',
    dark: false
  },
  {
    id: null,
    text: 'Timesheet Guide',
    number: null,
    buttonText: 'Go',
    dark: true
  },
  {
    id: null,
    text: 'XMS User Guide',
    number: null,
    buttonText: 'Go',
    dark: true
  }
]

export const pods: IPod[] = podz.map((pod: IPod) => {
  pod.id = kebabCase(pod.text)
  if (pod.number === 0) {
    const strNumber: string = localStorage.getItem(`pod-num-${pod.id}`)
    pod.number = strNumber ? +strNumber : getRandomNumber(100)
    localStorage.setItem(`pod-num-${pod.id}`, pod.number.toString())
  }
  return pod
})
