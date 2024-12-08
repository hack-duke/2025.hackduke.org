import { Panel } from "./panel";
import { H1 } from "./typography";

const ScheduleItem = ({ time, event }) => {
  const formattedEvent =
    event.length > 28
      ? `${event.slice(0, 28)}\n${event.slice(28)}`
      : event;

  return (
    <div className="flex items-start">
      <span className="text-[1.05vw] text-[#FBF9F7] font-bold w-[13vw]">{time}</span>
      <span 
        className="text-[1.05vw] text-[#FBF9F7] whitespace-pre-line"
      >
        {formattedEvent}
      </span>
    </div>
  );
};


const DaySchedule = ({ date, events, isSecondDay }) => {
  return (
    <div className={`${isSecondDay ? 'mt-2 md:mt-0' : ''}`}>
      <h2 className={`text-[3.5vw] text-[#D5CFFFF2] ${isSecondDay ? 'ml-16 md:ml-0' : ''}`}>
        {date}
      </h2>
      <div className={`space-y-[2vw] ${isSecondDay ? 'ml-16 md:ml-0' : ''}`}>
        {events.map((event, index) => (
          <ScheduleItem key={index} time={event.time} event={event.event} />
        ))}
      </div>
    </div>
  )
}

export const Schedule = () => {
  const day1Events = [
    { time: '09:00-11:00 am', event: 'Student Check-in' },
    { time: '10:30-11:30 am', event: 'Opening Ceremony' },
    { time: '11:30 am', event: 'Hacking Starts'},
    { time: '11:30-12:30 pm', event: 'Team Formation & Lunch' },
    { time: '01:00-03:00 pm', event: 'Sponsor Fair @ Kirby Winter Garden'},
    { time: '03:00-04:00 pm', event: 'Workshop 1 @ Room _' },
    { time: '04:00-05:00 pm', event: 'Workshop 2 @ Room _' },
    { time: '05:00-06:00 pm', event: 'Workshop 3 @ Room _' },
    { time: '06:00-07:00 pm', event: 'Dinner' },
    { time: '07:00-08:00 pm', event: 'Social Event 1 @ _' },
    { time: '08:00-09:00 pm', event: 'Social Event 2 @ _' },
    { time: '09:00-10:00 pm', event: 'Social Event 3 @ _' },
  ]

  const day2Events = [
    { time: '12:00-1:30 am', event: 'Midnight Breakfast ' },
    { time: '10:00-1:00 pm', event: 'Brunch' },
    { time: '11:30 pm', event: 'Hacking Ends' },
    { time: '12:00-1:00 pm', event: 'Pitching Workshop @ Room _' },
    { time: '2:00-4:30 pm', event: 'Judging' },
    { time: '5 pm', event: 'Closing Ceremony @ Geneen Auditorium' }
  ]

  return (
    <Panel className="h-[90vw] md:h-[60vw]">
      <div className='z-10 w-screen text-center mb-[2vw]'>
        <H1>Schedule</H1>
      </div>

      <div className='w-screen flex justify-center'>
        <div className='flex flex-col md:flex-row gap-[3vw] max-w-[90vw] md:max-w-none'>
          <DaySchedule date="2/8/25" events={day1Events} isSecondDay={false} />
          <DaySchedule date="2/9/25" events={day2Events} isSecondDay={true} />
        </div>
      </div>
    </Panel>
)
}