import { GENERAL_QUESTIONS, LOGISTICS_QUESTIONS } from '../consts'
import Accordion from './accordion'
import { Panel } from "./panel"
import { H1 } from "./typography"

export const FAQ = () => {
  return (
    <Panel>
      <H1 className='text-center mb-30'>FAQ</H1>
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
        src='/images/Ray.png'
        alt='Ray'
        className='absolute z-0 w-[30vw] right-[4vw] bottom-[10vw]'
      ></img>

      {/*<MusicNotes /> scaling*/}
    </Panel>
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
      className='absolute z-0 w-[20vw] left-[0vw] top-[vw]'
    />
    <img
      src='/images/BlueJelly.png'
      alt='Blue Jellyfish'
      className='absolute z-0 w-[17vw] bottom-[5vw] left-[15vw]'
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
