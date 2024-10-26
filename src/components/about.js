export const About = () => {
  return (
    <div className='h-screen text-white'>
      {/* The Top Walls */}
      <img src="/images/WallsBack.png" alt="Description" className=" absolute  left-0 w-full h-auto z-0" />
      <img
        src='/images/RightCliffFrontTop.png'
        alt='right front top cliff'
        className='absolute -right-0 transform w-40 h-auto'
        style={{ transform: 'translateY(200px)' }}
      />
      <img
        src='/images/LeftCliffFrontTop.png'
        alt='left front top cliff'
        className='absolute left-0 transform w-40 max-h-25'
        style={{ transform: 'translateY(200px)' }}
      />

      {/* Coral, Fish, and Decor */}
      <img src="/images/AboutRedCoral.png" alt="Red Coral decoration" 
        className='absolute left-0 w-auto h-[450px] z-0'
        style={{ transform: 'translateY(200px)' }}
        />
      <img src="/images/AboutLeftSpeaker.png" alt="About Left Speaker" 
        className='absolute left-5 w-auto h-[150px] z-1'
        style={{ transform: 'translateY(390px)'}}/>
      <img src="/images/AboutYellowCoral.png" alt="Yellow Coral"
        className='absolute left-5 w-auto h-[150px] z-1'
        style={{ transform: 'translateY(450px)'}}/>

      <img src="/images/AboutFish.png" alt="school of fish" className='absolute z-2 h-[250px]'
        style={{transform: 'translateX(200px)'}}/>
      

        {/* Tickets */}
        <div className="absolute w-auto h-[180px]" style={{ transform: 'translateX(270px) translateY(340px)' }}>
          <img src="/images/AboutTicket.png" alt="Left ticket that says 230+ hackers" 
              className="w-full h-full object-cover" />
        <p className="absolute inset-0 flex items-center justify-center text-about_ticket_text font-bold text-4xl font-urbanist"
          style={{ transform: 'translateY(-10px) translateX(-8px) rotate(-3deg)' }}>
          230+
        </p>
        <p className="absolute inset-0 flex items-center justify-center text-about_ticket_text font-bold text-2xl font-urbanist"
          style={{ transform: 'translateY(19px) translateX(-8px) rotate(-3deg)' }}>
          230+
        </p>
        </div>

        <div className="absolute w-auto h-[180px]" style={{ transform: 'translateX(520px) translateY(200px) rotate(20deg)' }}>
          <img src="/images/AboutTicket.png" alt="Left ticket that says 230+ hackers" 
              className="w-full h-full object-cover" />
        <p className="absolute inset-0 flex items-center justify-center text-about_ticket_text font-bold text-4xl font-urbanist"
          style={{ transform: 'translateY(-10px) translateX(-8px) rotate(-3deg)' }}>
          230+
        </p>
        <p className="absolute inset-0 flex items-center justify-center text-about_ticket_text font-bold text-2xl font-urbanist"
          style={{ transform: 'translateY(19px) translateX(-8px) rotate(-3deg)' }}>
          230+
        </p>
        </div>

        <div className="absolute w-auto h-[180px]" style={{ transform: 'translateX(870px) translateY(400px) rotate(10deg)' }}>
          <img src="/images/AboutTicket.png" alt="Left ticket that says 230+ hackers" 
              className="w-full h-full object-cover" />
        <p className="absolute inset-0 flex items-center justify-center text-about_ticket_text font-bold text-4xl font-urbanist"
          style={{ transform: 'translateY(-10px) translateX(-8px) rotate(-3deg)' }}>
          230+
        </p>
        <p className="absolute inset-0 flex items-center justify-center text-about_ticket_text font-bold text-2xl font-urbanist"
          style={{ transform: 'translateY(19px) translateX(-8px) rotate(-3deg)' }}>
          230+
        </p>
        </div>

        <div className="absolute w-auto h-[180px]" style={{ transform: 'translateX(520px) translateY(500px) rotate(-20deg)' }}>
          <img src="/images/AboutTicket.png" alt="Left ticket that says 230+ hackers" 
              className="w-full h-full object-cover" />
        <p className="absolute inset-0 flex items-center justify-center text-about_ticket_text font-bold text-4xl font-urbanist"
          style={{ transform: 'translateY(-10px) translateX(-8px) rotate(-3deg)' }}>
          230+
        </p>
        <p className="absolute inset-0 flex items-center justify-center text-about_ticket_text font-bold text-2xl font-urbanist"
          style={{ transform: 'translateY(19px) translateX(-8px) rotate(-3deg)' }}>
          230+
        </p>
        </div>

        {/*About header and description*/}
        <div className='absolute z-1 right-40 w-[400px] flex flex-col items-center'>
          <img src="/images/AboutHeader.png" alt="About" className=' h-[110px]'/>
          <p className="absolute inset-0 flex items-center justify-center text-about_ticket_text font-urbanist font-bold text-center text-xl"
          style={{transform:'translateY(120px)'}}>Hackduke is the premier intercollegiate hackathon for social good. We unite passionate students to create meaningful solutions for social impact.</p>
        </div>
        


       
    </div>
  )
}
