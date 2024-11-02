import React from 'react'

export const Sponsors = () => {
  return (
    <div className='h-[150vh] w-full bg-purple-900 text-white relative flex flex-col items-start justify-center px-8'>
      {/* Strobe Light Image*/}
      <img
        src='/images/Strobe%20Light%204.svg'
        alt='Strobe Light'
        className='absolute top-0 left-0 w-full h-full object-cover z-0'
      />

      <h2 className='text-5xl font-bold mb-8 z-10'>Sponsors</h2>
      <div className='grid grid-cols-3 gap-4 w-full max-w-screen-md z-10 ml-32'>
        {/* Optiver */}
        <img
          src='/images/Optiver.svg'
          alt='Optiver'
          className='w-full h-auto'
          style={{ gridColumn: '1', gridRow: '1' }}
        />
        {/* HRT */}
        <img
          src='/images/HRT.svg'
          alt='HRT'
          className='w-full h-auto'
          style={{ gridColumn: '2', gridRow: '1' }}
        />
        {/* IMC */}
        <img
          src='/images/IMC.svg'
          alt='IMC'
          className='w-full h-auto'
          style={{ gridColumn: '3', gridRow: '1' }}
        />
        {/* DRW */}
        <img
          src='/images/DRW.svg'
          alt='DRW'
          className='w-full h-auto'
          style={{ gridColumn: '1', gridRow: '2' }}
        />
        {/* Roblox */}
        <img
          src='/images/Roblox.svg'
          alt='Roblox'
          className='w-full h-auto'
          style={{ gridColumn: '2', gridRow: '2' }}
        />
        {/* Duke I&E */}
        <img
          src='/images/Duke%20I&E.svg'
          alt='Duke I&E'
          className='w-full h-auto'
          style={{ gridColumn: '3', gridRow: '2' }}
        />
        {/* Pinecone */}
        <img
          src='/images/Pinecone.svg'
          alt='Pinecone'
          className='w-full h-auto'
          style={{ gridColumn: '2', gridRow: '3' }}
        />
      </div>
    </div>
  )
}
