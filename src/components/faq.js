import { GENERAL_QUESTIONS, LOGISTICS_QUESTIONS } from '../consts'
import Accordion from './accordion'

export const FAQ = () => {
  return (
    <div className='h-[90vh] w-full text-white h-64 relative'>
      <h1 className='text-8xl font-bold section-title text-center w-full'>
        FAQ
      </h1>
      {/* This container hosts the jellyfish images */}
      <JellyFish />
      <div className='absolute flex flex-row space-x-20 mx-auto left-[20%] top-32 z-10 w-[70%]'>
        <div className='pt-8 flex align-center flex-col mr-4'>
          <ListTitle title='General' />
          <Accordion
            items={GENERAL_QUESTIONS.map(question => ({
              title: question,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            }))}
          />
        </div>

        <div className='pt-8 flex align-center flex-col'>
          <ListTitle title='Logistics' />
          <Accordion
            items={LOGISTICS_QUESTIONS.map(question => ({
              title: question,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            }))}
          />
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

export const ListTitle = ({ title }) => {
  return (
    <h2 className='text-center mb-2 text-[#D4CDF4] text-3xl font-bold blur-[0.05rem] brightness-125'>
      {title}
    </h2>
  )
}

export const JellyFish = () => (
  <div>
    <img
      src='/images/PinkJelly.png'
      alt='Pink Jellyfish'
      className='absolute z-20 w-60 left-0 top-8'
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
      className='w-6 absolute left-[16rem]'
    />
    <img
      src='/images/MusicNote.svg'
      alt='Music Note'
      className='w-12 absolute left-[20rem] top-12'
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
