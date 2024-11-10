export const About = () => {
  return (
    <div className="w-screen h-[60vw]">
      <img
        src="/images/AboutLighting.png"
        alt="lighting for the about section"
        className="absolute left-0 w-full h-auto transform z-0 right-[1rem]"
        style={{ transform: 'translateY(-10vw)' }}
      />

      {/* Coral, Fish, and Decor */}

      <img
        src="/images/AboutFish.png"
        alt="school of fish on the left"
        className="absolute h-[20vw] max-w-none z-2 left-[2vw]"
      />

      <img
        src="/images/AboutFish.png"
        alt="school of fish on the right"
        className="absolute h-[25vw] max-w-none z-2 right-[7vw]"
        style={{ transform: 'rotate(-10deg) translateY(40vw)' }}
      />

      {/* Tickets with Separate Texts */}
      <div style={{ transform: 'translateX(12vw) translateY(20vw) rotate(-3deg)' }}>
        <Ticket mainText="230+" subText="hackers" />
      </div>
      <div style={{ transform: 'translateX(35vw) translateY(25vw) rotate(20deg)' }}>
        <Ticket mainText="100+" subText="projects" />
      </div>
      <div style={{ transform: 'translateX(60vw) translateY(35vw) rotate(10deg)' }}>
        <Ticket mainText="50+" subText="mentors" />
      </div>
      <div style={{ transform: 'translateX(30vw) translateY(22vw) rotate(-20deg)' }}>
        <Ticket mainText="10+" subText="sponsors" />
      </div>

      {/* About header and description */}
      <div className="absolute z-1 right-[5vw] flex flex-col items-center mt-8" style={{ width: '30vw' }}>
        <h1 className='text-white text-[8vw] font-bold text-center w-full'>
          About
        </h1>
        <p
          className=" text-about_ticket_text font-urbanist font-semibold text-center text-[1.7vw]"
        >
          Hackduke is the premier intercollegiate hackathon for social good. We unite passionate students
          to create meaningful solutions for social impact.
        </p>
      </div>
    </div>
  );
};

export const Ticket = ({ mainText, subText }) => { /* We should really convert these to percentages */
  return (
    <div className="absolute w-[24vw] max-w-none h-auto">
      <img src="/images/AboutTicket.png" alt="Ticket" className="w-full h-auto object-cover" />
      <p className="absolute inset-0 flex items-center justify-center text-about_ticket_text font-bold text-lg md:text-xl lg:text-4xl font-urbanist"
        style={{ transform: 'translateY(-1.25vw) translateX(-2vw) rotate(-3deg)' }}>
        {mainText}
      </p>
      <p className="absolute inset-0 flex items-center justify-center text-about_ticket_text font-bold text-sm md:text-lg lg:text-2xl font-urbanist"
        style={{ transform: 'translateY(1.25vw) translateX(-2vw) rotate(-3deg)' }}>
        {subText}
      </p>
    </div>
  );
};