import { Panel } from "./panel"
import { H1 } from "./typography"

const ScheduleItem = ({ time, event }) => {
  return (
    <div className='flex items-center'>
      <span className='text-[1.5vw] text-[#FBF9F7] font-bold w-[13vw]'>{time}</span>
      <span className='text-[1.5vw] text-[#FBF9F7]'>{event}</span>
    </div>
  )
}

const DaySchedule = ({ date, events, isSecondDay }) => {
  return (
    <div className={`${isSecondDay ? 'mt-2 md:mt-0' : ''}`}>
      <h2 className={`text-[3.5vw] text-[#D5CFFFF2] ${isSecondDay ? 'ml-16 md:ml-0' : ''}`}>
        {date}
      </h2>
      <div className={`space-y-3 ${isSecondDay ? 'ml-16 md:ml-0' : ''}`}>
        {events.map((event, index) => (
          <ScheduleItem key={index} time={event.time} event={event.event} />
        ))}
      </div>
    </div>
  )
}

export const Schedule = () => {
  const day1Events = [
    { time: '9:30-10:30 am', event: 'Student Check-in' },
    { time: '11:00-12:15 am', event: 'Opening Ceremony' },
    { time: '12:15-1:00 pm', event: 'Lunch' },
    { time: '12:15-1:00 pm', event: 'Team Formation Mixer' },
    { time: '2:00-3:00 pm', event: 'Track Talks' },
    { time: '4:00-5:00 pm', event: 'UI/UX Design Workshop' },
    { time: '5:00-6:00 pm', event: 'Dinner' }
  ]

  const day2Events = [
    { time: '2:00-1:00 am', event: 'Midnight Snack' },
    { time: '9:00-10:00 am', event: 'Breakfast' },
    { time: '11:00-12:00 pm', event: 'Lunch' },
    { time: '11:00-12:30 pm', event: 'Hacking Ends' },
    { time: '1:00-2:00 pm', event: 'Pitching Workshop' },
    { time: '2:00-4:30 pm', event: 'Judging' },
    { time: '6:00-6:30 pm', event: 'Closing Ceremony' }
  ]

  return (
    <Panel className="h-auto md:h-[60vw] pb-16 md:pb-0">
      <div className='z-10 w-screen text-center mb-8'>
        <H1>Schedule</H1>
      </div>

      <div className='w-screen flex justify-center'>
        <div className='flex flex-col md:flex-row gap-[3vw] max-w-[90vw] md:max-w-none'>
          <DaySchedule date="10/22/24" events={day1Events} isSecondDay={false} />
          <DaySchedule date="10/23/24" events={day2Events} isSecondDay={true} />
        </div>
      </div>
    </Panel>
)
}