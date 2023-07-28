import { IPod } from '../interfaces/i-pod'
import { getRandomNumber } from '../utils/number-utils'

export const pods: IPod[] = [
  {
    id: 'new-jobs',
    text: 'New Jobs',
    number: getRandomNumber(100),
    buttonText: 'Go',
    dark: true,
    active: true
  },
  {
    id: 'my-unfilled-jobs',
    text: 'My Unfilled Jobs',
    number: getRandomNumber(100),
    buttonText: 'View',
    dark: false,
    active: true
  },
  {
    id: 'in-progress-bookings',
    text: 'In Progress Bookings',
    number: getRandomNumber(100),
    buttonText: 'View',
    dark: false,
    active: true
  },
  {
    id: 'messages',
    text: 'Messages',
    number: getRandomNumber(100),
    buttonText: 'Go',
    dark: false,
    active: true
  },
  {
    id: 'unsubmitted-timesheets',
    text: 'Unsubmitted Timesheets',
    number: getRandomNumber(100),
    buttonText: 'View',
    dark: false,
    active: true
  },
  {
    id: 'unauthorised-timesheets',
    text: 'Unauthorised Timesheets',
    number: getRandomNumber(100),
    buttonText: 'View',
    dark: false,
    active: true
  },
  {
    id: 'rejected-timesheets',
    text: 'Rejected Timesheets',
    number: getRandomNumber(100),
    buttonText: 'View',
    dark: false,
    active: true
  },
  {
    id: 'timesheet-guide',
    text: 'Timesheet Guide',
    number: null,
    buttonText: 'Go',
    dark: true,
    active: true
  },
  {
    id: 'xms-user-guide',
    text: 'XMS User Guide',
    number: null,
    buttonText: 'Go',
    dark: true,
    active: true
  }
]
