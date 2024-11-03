export const FAQ = () => {
  return (
    <div className='h-[85vh] w-full text-white h-64 relative'>
      <h1 className='text-8xl font-bold blur-[0.05rem] text-center w-full'>
        FAQ
      </h1>
      <img
        src='/images/PinkJelly.png'
        alt='Pink Jellyfish'
        className='absolute z-20 w-52 left-0'
      />
      <img
        src='/images/BlueJelly.png'
        alt='Blue Jellyfish'
        className='absolute z-20 w-44 bottom-10 left-32'
      />
      <div className='absolute grid grid-cols-[60%,40%] mx-auto left-[20%] top-32 z-10 w-[50%] h-[26rem]'>
        <div className='pt-16'>
          <h2 className='text-center mb-4 text-[#D4CDF4] text-xl font-bold blur-[0.05rem] brightness-125'>
            General
          </h2>
          <ul className='pl-12 space-y-4'>
            <li className='custom-shell-bullet'>
              when is the application deadline?
            </li>
            <li className='custom-shell-bullet-alt'>who can I work with?</li>
            <li className='custom-shell-bullet'>what if I'm new to coding?</li>
            <li className='custom-shell-bullet-alt'>will there be prizes?</li>
            <li className='custom-shell-bullet'>
              how can I get involved/help?
            </li>
          </ul>
        </div>
        <div className='pt-16 flex align-center flex-col'>
          <h2 className='text-center mb-4 text-[#D4CDF4] text-xl font-bold blur-[0.05rem] brightness-125'>
            Logistics
          </h2>
          <ul className='pl-12 space-y-4'>
            <li className='custom-shell-bullet'>when? where?</li>
            <li className='custom-shell-bullet-alt'>what should I bring?</li>
            <li className='custom-shell-bullet'>who can participate?</li>
            <li className='custom-shell-bullet-alt'>what can I make?</li>
          </ul>
        </div>
      </div>

      <img
        src='/images/Ray.svg'
        className='absolute right-52 w-[30%] bottom-4 z-1'
      ></img>

      <div className='music-notes'>
        <img
          src='/images/MusicNote.svg'
          alt='Music Note'
          className='w-4 absolute left-40'
        />
        <img
          src='/images/MusicNote.svg'
          alt='Music Note'
          className='w-8 absolute left-52 top-16'
        />

        <img
          src='/images/MusicNote.svg'
          alt='Music Note'
          className='w-8 absolute right-[48%] bottom-16'
        />

        <img
          src='/images/MusicNote.svg'
          alt='Music Note'
          className='w-4 absolute right-[20%] bottom-40'
        />

        <img
          src='/images/MusicNote.svg'
          alt='Music Note'
          className='w-4 absolute right-60 bottom-20'
        />

        <img
          src='/images/MusicNote.svg'
          alt='Music Note'
          className='w-4 absolute right-12 bottom-48'
        />
      </div>
    </div>
  )
}
