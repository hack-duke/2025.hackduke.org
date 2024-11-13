import { GENERAL_QUESTIONS, LOGISTICS_QUESTIONS } from '../consts'
import Accordion from './accordion'
import { Panel } from "./panel"
import { H1 } from "./typography"

export const FAQ = () => {
  return (
    <Panel className="h-[90vw] md:h-[60vw]">
      <H1 className='text-center mb-30'>FAQ</H1>
      {/* This container hosts the jellyfish images */}
      <JellyFish />
      <div className='absolute flex flex-col md:flex-row md:space-x-20 mx-auto left-[30%] md:left-[20%] top-8 md:top-32 z-30'>
        <div className='pt-8 flex align-center flex-col max-w-[45vw] md:mr-4'>
          <ListTitle title='General' />
          <Accordion
            items={GENERAL_QUESTIONS.map(question => ({
              title: question,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            }))}
          />
        </div>

        <div className='md:pt-8 flex align-center flex-col ml-20 md:ml-0 max-w-[35vw]'>
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
        src='/images/Ray.png'
        alt='Ray'
        className='absolute z-20 w-[30vw] right-[15vw] bottom-[0vw] md:bottom-[5vw]'
      ></img>

      {/*<MusicNotes /> scaling*/}
    </Panel>
  )
}

export const ListTitle = ({ title }) => {
  return (
    <h2 className={'glow text-center mb-2 text-[#D4CDF4] text-[3vw] md:text-3xl font-bold brightness-125'}>
      {title}
    </h2>
  )
}

export const JellyFish = () => (
  <div>
    <img
      src='/images/PinkJelly.png'
      alt='Pink Jellyfish'
      className='absolute z-20 w-[20vw] left-[0vw] top-[vw]'
    />
    <img
      src='/images/BlueJelly.png'
      alt='Blue Jellyfish'
      className='absolute z-20 w-[17vw] bottom-[5vw] left-[15vw]'
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
