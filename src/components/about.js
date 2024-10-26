export const About = () => {
  return (
    <div className='h-screen text-white'>
      {/* The Top Walls */}
      <img src="/images/WallsBack.png" alt="Description" className=" absolute  left-0 w-full h-auto z-0" />
      <img
        src='/images/RightCliffFrontTop.png'
        alt='right front top cliff'
        className='absolute -right-20 transform -translate-x-1/2 w-40 h-auto'
        style={{ transform: 'translateY(200px)' }}
      />
      <img
        src='/images/LeftCliffFrontTop.png'
        alt='left front top cliff'
        className='absolute left-0 transform translate-x-0 w-40 max-h-25'
        style={{ transform: 'translateY(200px)' }}
      />

      {/* Coral and Decor */}
      <img src="/images/AboutRedCoral.png" alt="Red Coral decoration" 
        className='absolute  left-0 w-auto h-auto z-0'
        />

      <p>about</p>
      {/* <img src="/images/Blur2.png" alt="Description" className="absolute z-100  w-full max-h-35" /> */}
    </div>
  )
}
