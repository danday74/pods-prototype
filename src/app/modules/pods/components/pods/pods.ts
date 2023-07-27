import { IPod } from '../../../../interfaces/i-pod'
import { getRandomNumber } from '../../../../utils/number-utils'

export const pods: IPod[] = [
  {
    text: 'New Jobs',
    number: getRandomNumber(100),
    buttonText: 'Go',
    dark: false
  },
  {
    text: 'My Unfilled Jobs',
    number: getRandomNumber(100),
    buttonText: 'View',
    dark: false
  },
  {
    text: 'In Progress Bookings',
    number: getRandomNumber(100),
    buttonText: 'View',
    dark: false
  },
  {
    text: 'Messages',
    number: getRandomNumber(100),
    buttonText: 'Go',
    dark: false
  },
  {
    text: 'Unsubmitted Timesheets',
    number: getRandomNumber(100),
    buttonText: 'View',
    dark: false
  },
  {
    text: 'Unauthorised Timesheets',
    number: getRandomNumber(100),
    buttonText: 'View',
    dark: false
  },
  {
    text: 'Rejected Timesheets',
    number: getRandomNumber(100),
    buttonText: 'View',
    dark: false
  },
  {
    text: 'Timesheet Guide',
    number: null,
    buttonText: 'Go',
    dark: true
  },
  {
    text: 'XMS User Guide',
    number: null,
    buttonText: 'Go',
    dark: true
  }
]
