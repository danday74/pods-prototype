import { IPod } from '../interfaces/i-pod'
import { kebabCase, sortBy } from 'lodash-es'
import { getRandomNumber } from '../utils/number-utils'

const podz: IPod[] = [
  // specials
  {
    id: null,
    text: 'Business Activity Graph',
    type: 'graph',
    number: null,
    buttonText: null,
    dark: null,
    addedByHuman: false
  },
  {
    id: null,
    text: 'Performance Graph',
    type: 'graph',
    number: null,
    buttonText: null,
    dark: null,
    addedByHuman: false
  },
  {
    id: null,
    text: 'Raynes Park Office Map',
    type: 'map',
    number: null,
    buttonText: null,
    dark: null,
    addedByHuman: false
  },
  // first batch
  {
    id: null,
    text: 'New Jobs',
    type: 'normal',
    number: 0,
    buttonText: 'Go',
    dark: true,
    addedByHuman: false
  },
  {
    id: null,
    text: 'My Unfilled Jobs',
    type: 'normal',
    number: 0,
    buttonText: 'View',
    dark: false,
    addedByHuman: false
  },
  {
    id: null,
    text: 'In Progress Bookings',
    type: 'normal',
    number: 0,
    buttonText: 'View',
    dark: false,
    addedByHuman: false
  },
  {
    id: null,
    text: 'Messages',
    type: 'normal',
    number: 0,
    buttonText: 'Go',
    dark: false,
    addedByHuman: false
  },
  {
    id: null,
    text: 'Unsubmitted Timesheets',
    type: 'normal',
    number: 0,
    buttonText: 'View',
    dark: false,
    addedByHuman: false
  },
  {
    id: null,
    text: 'Unauthorised Timesheets',
    type: 'normal',
    number: 0,
    buttonText: 'View',
    dark: false,
    addedByHuman: false
  },
  {
    id: null,
    text: 'Rejected Timesheets',
    type: 'normal',
    number: 0,
    buttonText: 'View',
    dark: false,
    addedByHuman: false
  },
  {
    id: null,
    text: 'Timesheet Guide',
    type: 'normal',
    number: null,
    buttonText: 'Go',
    dark: true,
    addedByHuman: false
  },
  {
    id: null,
    text: 'XMS User Guide',
    type: 'normal',
    number: null,
    buttonText: 'Go',
    dark: true,
    addedByHuman: false
  },
  // second batch
  {
    id: null,
    text: 'Active Extensions',
    type: 'normal',
    number: 0,
    buttonText: 'View',
    dark: true,
    addedByHuman: false
  },
  {
    id: null,
    text: 'Audit Packs',
    type: 'normal',
    number: 0,
    buttonText: 'View',
    dark: false,
    addedByHuman: false
  },
  {
    id: null,
    text: 'Available and Eligible Candidates',
    type: 'normal',
    number: 0,
    buttonText: 'View',
    dark: true,
    addedByHuman: false
  },
  {
    id: null,
    text: 'Interview Requests',
    type: 'normal',
    number: 0,
    buttonText: 'View',
    dark: true,
    addedByHuman: false
  },
  {
    id: null,
    text: 'My Interviews Within the Next 7 Days',
    type: 'normal',
    number: 0,
    buttonText: 'View',
    dark: true,
    addedByHuman: false
  },
  {
    id: null,
    text: 'New Orders',
    type: 'normal',
    number: 0,
    buttonText: 'View',
    dark: false,
    addedByHuman: false
  },
  {
    id: null,
    text: 'Non Chargeable Timesheets',
    type: 'normal',
    number: 0,
    buttonText: 'View',
    dark: false,
    addedByHuman: false
  },
  {
    id: null,
    text: 'Other Tasks',
    type: 'normal',
    number: 0,
    buttonText: 'View',
    dark: true,
    addedByHuman: false
  },
  {
    id: null,
    text: 'Submissions',
    type: 'normal',
    number: 0,
    buttonText: 'View',
    dark: false,
    addedByHuman: false
  }
]

const pods: IPod[] = podz.map((pod: IPod) => {
  pod.id = kebabCase(pod.text)
  if (pod.number === 0) {
    const strPodNumbers: string = localStorage.getItem(`pod-numbers`)
    const podNumbers: any = strPodNumbers ? JSON.parse(strPodNumbers) : {}
    podNumbers[pod.id] = podNumbers[pod.id] || getRandomNumber(99)
    pod.number = podNumbers[pod.id]
    localStorage.setItem('pod-numbers', JSON.stringify(podNumbers))
  }
  return pod
})

export const getPods = (): IPod[] => {
  const strExtraPods: string = localStorage.getItem('extra-pods')
  const extraPods: IPod[] = strExtraPods ? JSON.parse(strExtraPods) : []
  return sortBy([...pods, ...extraPods], [(pod: IPod) => pod.text.toLowerCase()])
}
