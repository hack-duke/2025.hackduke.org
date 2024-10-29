export const Schedule = () => {
  return (
    <div className='h-screen text-white'>
      <img src="/images/ScheduleLeftSpeaker.png" alt="About Left Speaker" 
        className='absolute left-5 w-auto h-[300px] z-1'
        style={{ transform: 'translateY(390px)'}}/>
      <img src="/images/ScheduleYellowCoral.png" alt="Yellow Coral"
        className='absolute left-5 w-auto h-[300px] z-1'
        style={{ transform: 'translateY(450px)'}}/>
      <img src="/images/ScheduleRightSpeaker.png" alt="About Left Speaker" 
        className='absolute right-5 w-auto h-[300px] z-1'
        style={{ transform: 'translateY(390px)'}}/>

      {/* Music Notes near left speaker */}
      <img src="/images/MusicNote.png" alt="Music Note 1" 
        className='absolute left-[200px] w-auto h-[50px] z-1'
        style={{ transform: 'translateY(300px)'}}/>
      <img src="/images/MusicNote.png" alt="Music Note 2" 
        className='absolute left-[240px] w-auto h-[50px] z-1'
        style={{ transform: 'translateY(400px)'}}/>
      <img src="/images/MusicNote.png" alt="Music Note 3" 
        className='absolute left-[230px] w-auto h-[50px] z-1'
        style={{ transform: 'translateY(180px)'}}/>
      <img src="/images/MusicNote.png" alt="Music Note 4" 
        className='absolute left-[325px] w-auto h-[50px] z-1'
        style={{ transform: 'translateY(100px)'}}/>

      {/* Music Notes near right speaker */}
      <img src="/images/MusicNote.png" alt="Music Note 1" 
        className='absolute right-[200px] w-auto h-[50px] z-1'
        style={{ transform: 'translateY(300px)'}}/>
      <img src="/images/MusicNote.png" alt="Music Note 2" 
        className='absolute right-[350px] w-auto h-[50px] z-1'
        style={{ transform: 'translateY(400px)'}}/>
      <img src="/images/MusicNote.png" alt="Music Note 3" 
        className='absolute right-[325px] w-auto h-[50px] z-1'
        style={{ transform: 'translateY(550px)'}}/>

      {/*Schedule header*/}
      <div className='z-1 w-[400px] mx-auto flex flex-col items-center'>
        <img src="/images/ScheduleHeader.png" alt="About" className='h-[110px]'/>
      </div>

      {/*Schedule content*/}
      <div className='max-w-6xl mx-auto mt-12 px-4'>
        <div className='grid grid-cols-2 gap-32'>
          {/* Day 1 */}
          <div>
            <h2 className='text-4xl mb-8 text-center tracking-wide text-[#D5CFFFF2]'>10/22/24</h2>
            <div className='text-right space-y-4'>
              <div className='flex justify-between items-center'>
                <span className='text-lg w-32'>9:30-10:30 am</span>
                <span className='text-lg flex-1 ml-8'>Student Check-in</span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-lg w-32'>11:00-12:15 am</span>
                <span className='text-lg flex-1 ml-8'>Opening Ceremony</span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-lg w-32'>12:15-1:00 pm</span>
                <span className='text-lg flex-1 ml-8'>Lunch</span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-lg w-32'>12:15-1:00 pm</span>
                <span className='text-lg flex-1 ml-8'>Team Formation Mixer</span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-lg w-32'>2:00-3:00 pm</span>
                <span className='text-lg flex-1 ml-8'>Environment and Inequality Track Talks</span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-lg w-32'>4:00-5:00 pm</span>
                <span className='text-lg flex-1 ml-8'>UI/UX Design Workshop</span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-lg w-32'>5:00-6:00 pm</span>
                <span className='text-lg flex-1 ml-8'>Dinner</span>
              </div>
            </div>
          </div>

          {/* Day 2 */}
          <div>
            <h2 className='text-4xl mb-8 text-center tracking-wide text-[#D5CFFFF2]'>10/23/24</h2>
            <div className='space-y-4 text-right'>
              <div className='flex justify-between items-center'>
                <span className='text-lg w-32'>2:00-1:00 am</span>
                <span className='text-lg flex-1 ml-8'>Midnight Snack</span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-lg w-32'>9:00-10:00 am</span>
                <span className='text-lg flex-1 ml-8'>Breakfast</span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-lg w-32'>11:00-12:00 pm</span>
                <span className='text-lg flex-1 ml-8'>Lunch</span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-lg w-32'>12:30 pm</span>
                <span className='text-lg flex-1 ml-8'>Hacking Ends</span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-lg w-32'>1:00-2:00 pm</span>
                <span className='text-lg flex-1 ml-8'>Pitching Workshop</span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-lg w-32'>2:00-4:30 pm</span>
                <span className='text-lg flex-1 ml-8'>Judging</span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-lg w-32'>6:00-6:30 pm</span>
                <span className='text-lg flex-1 ml-8'>Closing Ceremony</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}