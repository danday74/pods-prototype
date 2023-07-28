import { IPod } from '../interfaces/i-pod'
import { getRandomNumber } from '../utils/number-utils'

export const pods: IPod[] = [
    {
        text: 'New Jobs',
        number: getRandomNumber(100),
        buttonText: 'Go',
        dark: true,
        active: true
    },
    {
        text: 'My Unfilled Jobs',
        number: getRandomNumber(100),
        buttonText: 'View',
        dark: false,
        active: true
    },
    {
        text: 'In Progress Bookings',
        number: getRandomNumber(100),
        buttonText: 'View',
        dark: false,
        active: true
    },
    {
        text: 'Messages',
        number: getRandomNumber(100),
        buttonText: 'Go',
        dark: false,
        active: true
    },
    {
        text: 'Unsubmitted Timesheets',
        number: getRandomNumber(100),
        buttonText: 'View',
        dark: false,
        active: true
    },
    {
        text: 'Unauthorised Timesheets',
        number: getRandomNumber(100),
        buttonText: 'View',
        dark: false,
        active: true
    },
    {
        text: 'Rejected Timesheets',
        number: getRandomNumber(100),
        buttonText: 'View',
        dark: false,
        active: true
    },
    {
        text: 'Timesheet Guide',
        number: null,
        buttonText: 'Go',
        dark: true,
        active: true
    },
    {
        text: 'XMS User Guide',
        number: null,
        buttonText: 'Go',
        dark: true,
        active: true
    }
]
