import { GENERAL_QUESTIONS, LOGISTICS_QUESTIONS } from '../consts'

export const FAQ = () => {
  return (
    <div className='h-[85vh] w-full text-white h-64 relative'>
      <h1 className='text-8xl font-bold blur-[0.05rem] text-center w-full'>
        FAQ
      </h1>
      {/* This container hosts the jellyfish images */}
      <JellyFish />
      <div className='absolute grid grid-cols-1 mx-auto left-[20%] top-32 z-10 w-[50%] h-[26rem] text-[1.7vw] sm:grid-cols-[60%,40%]'>
        <div className='pt-[3vw]'>
          <ListTitle title='General' />
          <AlternatingList items={GENERAL_QUESTIONS} />
        </div>
        <div className='pt-[3vw] flex align-center flex-col'>
          <ListTitle title='Logistics' />
          <AlternatingList items={LOGISTICS_QUESTIONS} />
        </div>
      </div>

      <img
        src='/images/Ray.svg'
        className='absolute right-52 w-[30%] bottom-4 z-1'
      ></img>

      <MusicNotes />
    </div>
  )
}

export const AlternatingList = ({ items }) => {
  return (
    <ul className='pl-12 space-y-4'>
      {items.map((item, index) => (
        <li className={`custom-shell-bullet${index % 2 === 0 ? '' : '-alt'}`}>
          {item}
        </li>
      ))}
    </ul>
  )
}

export const ListTitle = ({ title }) => {
  return (
    <h2 className='text-center mb-4 text-[#D4CDF4] text-xl font-bold blur-[0.05rem] brightness-125'>
      {title}
    </h2>
  )
}

export const JellyFish = () => (
  <div>
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
  </div>
)

export const MusicNotes = () => (
  <div>
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
)
