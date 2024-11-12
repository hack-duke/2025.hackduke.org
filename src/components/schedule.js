export const Schedule = () => {
  return (
    <div className='h-[90vh] text-white'>
      <img src="/images/ScheduleLeftSpeaker.png" alt="About Left Speaker" 
        className='absolute left-5 w-auto h-[15rem] z-0'
        style={{ transform: 'translateY(24.375rem)'}}/>
      <img src="/images/ScheduleYellowCoral.png" alt="Yellow Coral"
        className='absolute left-5 w-auto h-[12rem] z-0'
        style={{ transform: 'translateY(28.125rem)'}}/>
      <img src="/images/ScheduleRightSpeaker.png" alt="About Left Speaker" 
        className='absolute right-5 w-auto h-[15rem] z-0'
        style={{ transform: 'translateY(22.5rem)'}}/>

      {/* Music Notes near left speaker */}
      <img src="/images/MusicNote.png" alt="Music Note 1" 
        className='absolute left-[8rem] w-auto h-[2rem] z-0'
        style={{ transform: 'translateY(18.75rem)'}}/>
      <img src="/images/MusicNote.png" alt="Music Note 2" 
        className='absolute left-[10rem] w-auto h-[2rem] z-0'
        style={{ transform: 'translateY(22rem)'}}/>
      <img src="/images/MusicNote.png" alt="Music Note 3" 
        className='absolute left-[12rem] w-auto h-[2rem] z-0'
        style={{ transform: 'translateY(16rem)'}}/>

      {/* Music Notes near right speaker */}
      <img src="/images/MusicNote.png" alt="Music Note 1" 
        className='absolute right-[12rem] w-auto h-[2rem] z-0'
        style={{ transform: 'translateY(18.75rem)'}}/>
      <img src="/images/MusicNote.png" alt="Music Note 2" 
        className='absolute right-[15rem] w-auto h-[2rem] z-0'
        style={{ transform: 'translateY(22rem)'}}/>
      <img src="/images/MusicNote.png" alt="Music Note 3" 
        className='absolute right-[17rem] w-auto h-[2rem] z-0'
        style={{ transform: 'translateY(16rem)'}}/>

      <div className='z-10 w-[25rem] mx-auto flex flex-col items-center mb-8'>
        <ListTitle title="Schedule" />
      </div>

      <div className='max-w-4xl mx-auto px-16 relative z-10'>
        <div className='grid grid-cols-2 gap-16'>
          <div>
            <h2 className='text-3xl mb-6 text-center tracking-wide text-[#D5CFFFF2] font-normal'>10/22/24</h2>
            <div className='space-y-3'>
              <div className='flex justify-between items-center'>
                <span className='text-base w-28 text-[#FBF9F7] font-bold'>9:30-10:30 am</span>
                <span className='text-base flex-1 ml-6 text-[#FBF9F7] font-normal'>Student Check-in</span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-base w-28 text-[#FBF9F7] font-bold'>11:00-12:15 am</span>
                <span className='text-base flex-1 ml-6 text-[#FBF9F7] font-normal'>Opening Ceremony</span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-base w-28 text-[#FBF9F7] font-bold'>12:15-1:00 pm</span>
                <span className='text-base flex-1 ml-6 text-[#FBF9F7] font-normal'>Lunch</span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-base w-28 text-[#FBF9F7] font-bold'>12:15-1:00 pm</span>
                <span className='text-base flex-1 ml-6 text-[#FBF9F7] font-normal'>Team Formation Mixer</span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-base w-28 text-[#FBF9F7] font-bold'>2:00-3:00 pm</span>
                <span className='text-base flex-1 ml-6 text-[#FBF9F7] font-normal'>Environment and Inequality Track Talks</span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-base w-28 text-[#FBF9F7] font-bold'>4:00-5:00 pm</span>
                <span className='text-base flex-1 ml-6 text-[#FBF9F7] font-normal'>UI/UX Design Workshop</span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-base w-28 text-[#FBF9F7] font-bold'>5:00-6:00 pm</span>
                <span className='text-base flex-1 ml-6 text-[#FBF9F7] font-normal'>Dinner</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className='text-3xl mb-6 text-center tracking-wide text-[#D5CFFFF2] font-normal'>10/23/24</h2>
            <div className='space-y-3'>
              <div className='flex justify-between items-center'>
                <span className='text-base w-28 text-[#FBF9F7] font-bold'>2:00-1:00 am</span>
                <span className='text-base flex-1 ml-6 text-[#FBF9F7] font-normal'>Midnight Snack</span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-base w-28 text-[#FBF9F7] font-bold'>9:00-10:00 am</span>
                <span className='text-base flex-1 ml-6 text-[#FBF9F7] font-normal'>Breakfast</span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-base w-28 text-[#FBF9F7] font-bold'>11:00-12:00 pm</span>
                <span className='text-base flex-1 ml-6 text-[#FBF9F7] font-normal'>Lunch</span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-base w-28 text-[#FBF9F7] font-bold'>12:30 pm</span>
                <span className='text-base flex-1 ml-6 text-[#FBF9F7] font-normal'>Hacking Ends</span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-base w-28 text-[#FBF9F7] font-bold'>1:00-2:00 pm</span>
                <span className='text-base flex-1 ml-6 text-[#FBF9F7] font-normal'>Pitching Workshop</span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-base w-28 text-[#FBF9F7] font-bold'>2:00-4:30 pm</span>
                <span className='text-base flex-1 ml-6 text-[#FBF9F7] font-normal'>Judging</span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-base w-28 text-[#FBF9F7] font-bold'>6:00-6:30 pm</span>
                <span className='text-base flex-1 ml-6 text-[#FBF9F7] font-normal'>Closing Ceremony</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ListTitle = ({ title }) => {
  return (
    <h2 className='text-center mb-4 text-[#D4CDF4] text-xl font-bold blur-[0.05rem] brightness-125'>
      {title}
    </h2>
  )
}