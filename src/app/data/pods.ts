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
  },
  // MORE
  {
    id: null,
    text: 'Active Extensions',
    number: 0,
    buttonText: 'View',
    dark: true
  },
  {
    id: null,
    text: 'Audit Packs',
    number: 0,
    buttonText: 'View',
    dark: false
  },
  {
    id: null,
    text: 'Available and Eligible Candidates',
    number: 0,
    buttonText: 'View',
    dark: true
  },
  {
    id: null,
    text: 'Interview Requests',
    number: 0,
    buttonText: 'View',
    dark: true
  },
  {
    id: null,
    text: 'My Interviews Within the Next 7 Days',
    number: 0,
    buttonText: 'View',
    dark: true
  },
  {
    id: null,
    text: 'New Orders',
    number: 0,
    buttonText: 'View',
    dark: false
  },
  {
    id: null,
    text: 'Non Chargeable Timesheets',
    number: 0,
    buttonText: 'View',
    dark: false
  },
  {
    id: null,
    text: 'Other Tasks',
    number: 0,
    buttonText: 'View',
    dark: true
  },
  {
    id: null,
    text: 'Submissions',
    number: 0,
    buttonText: 'View',
    dark: false
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
