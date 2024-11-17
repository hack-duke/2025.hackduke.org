import React from 'react'
import { Panel } from './panel'
import { H1 } from './typography'

export const Sponsors = () => {
  return (
    <Panel>
      <div className='ml-[5vw] mr-[5vw]'>
        <H1>Sponsors</H1>

        { /* Can we make this component based please */}
        <div className='grid grid-cols-3 gap-4 w-full max-w-screen-md'>
          {/* Optiver */}
          <img
            src='/images/Optiver.svg'
            alt='Optiver'
            className='w-full h-auto z-50'
            style={{ gridColumn: '1', gridRow: '1 / span 2'}}
          />
          {/* HRT */}
          <img
            src='/images/HRT.svg'
            alt='HRT'
            className='w-full h-auto z-50'
            style={{ gridColumn: '2'}}
          />
          {/* IMC */}
          <img
            src='/images/IMC.svg'
            alt='IMC'
            className='w-full h-auto z-50'
            style={{ gridColumn: '3'}}
          />
          {/* DRW */}
          <img
            src='/images/DRW.svg'
            alt='DRW'
            className='w-full h-auto z-50 translate-y-[-76%]'
            style={{ gridColumn: '1'}}
          />
          {/* Roblox */}
          <img
            src='/images/Roblox.svg'
            alt='Roblox'
            className='w-full h-auto z-50 translate-y-[-36%]'
            style={{ gridColumn: '2'}}
          />
          {/* Duke I&E */}
          <img
            src='/images/Duke%20I&E.svg'
            alt='Duke I&E'
            className='w-full h-auto z-50 translate-y-[-110%]'
            style={{ gridColumn: '3'}}
          />
          {/* Pinecone */}
          <img
            src='/images/Pinecone.svg'
            alt='Pinecone'
            className='w-full h-auto z-50 translate-y-[-113%]'
            style={{ gridColumn: '2'}}
          />
        </div>
      </div>
    </Panel>
  )
}
