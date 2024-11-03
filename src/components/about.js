export const About = () => {
  return (
    <div className="w-[100vw]">
      {/* The Top Walls */}
      <img src="/images/WallsBack.png" alt="Background Wall" className="absolute left-0 right-0 w-screen h-auto z-0" />
      <img
        src="/images/RightCliffFrontTop.png"
        alt="right front top cliff"
        className="absolute right-0 w-[20vw] max-w-none h-auto z-0 transform"
        style={{ transform: 'translateY(10vw)' }}
      />
      <img
        src="/images/LeftCliffFrontTop.png"
        alt="left front top cliff"
        className="absolute left-0 w-[20vw] max-w-none h-auto z-0 transform"
        style={{ transform: 'translateY(10vw)' }}
      />

      <img
        src="/images/AboutLighting.png"
        alt="lighting for the about section"
        className="absolute left-0 w-full h-auto transform z-0"
        style={{ transform: 'translateY(-10vw)' }}
      />

      {/* Coral, Fish, and Decor */}
      <img
        src="/images/AboutRedCoral.png"
        alt="Red Coral decoration"
        className="absolute left-0 w-[25vw] max-w-none h-auto z-0"
        style={{ transform: 'translateY(20vw) translateX(2vw)'  }}
      />
      <img
        src="/images/AboutLeftSpeaker.png"
        alt="About Left Speaker"
        className="absolute left-2 w-[10vw] max-w-none h-auto z-1"
        style={{ transform: 'translateY(32vw) translateX(5vw)' }}
      />
      <img
        src="/images/AboutYellowCoral.png"
        alt="Yellow Coral"
        className="absolute left-5 w-[10vw] max-w-none h-auto z-1"
        style={{ transform: 'translateY(35vw) translateX(3vw)' }}
      />

      <img
        src="/images/AboutFish.png"
        alt="school of fish on the left"
        className="absolute h-[20vw] max-w-none z-2"
        style={{ transform: 'translateX(8vw) translateY(7vw)' }}
      />

      <img
        src="/images/AboutFish.png"
        alt="school of fish on the right"
        className="absolute h-[25vw] max-w-none z-2 transform"
        style={{ transform: 'translateX(80vw) translateY(25vw) rotate(-10deg)' }}
      />

      <img
        src="/images/AboutBlueSparkleOverlay.png"
        className="absolute w-full h-auto z-2"
        alt="blue sparkles"
      />

      {/* Tickets with Separate Texts */}
      <div className="absolute w-[28vw] max-w-none h-auto" style={{ transform: 'translateX(17vw) translateY(35vw) rotate(-3deg)' }}>
        <img src="/images/AboutTicket.png" alt="Ticket" className="w-full h-auto object-cover" />
        <p className="absolute inset-0 flex items-center justify-center text-about_ticket_text font-bold text-lg md:text-xl lg:text-4xl font-urbanist"
          style={{ transform: 'translateY(-2vw) translateX(-2vw) rotate(-3deg)' }}>
          230+
        </p>
        <p className="absolute inset-0 flex items-center justify-center text-about_ticket_text font-bold text-sm md:text-lg lg:text-2xl font-urbanist"
          style={{ transform: 'translateY(2vw) translateX(-2vw) rotate(-3deg)' }}>
          hackers
        </p>
      </div>

      <div className="absolute w-[28vw] max-w-none h-auto" style={{ transform: 'translateX(40vw) translateY(20vw) rotate(20deg)' }}>
        <img src="/images/AboutTicket.png" alt="Ticket" className="w-full h-auto object-cover" />
        <p className="absolute inset-0 flex items-center justify-center text-about_ticket_text font-bold text-lg md:text-xl lg:text-4xl font-urbanist"
          style={{ transform: 'translateY(-2vw) translateX(-2vw) rotate(-3deg)' }}>
          100+
        </p>
        <p className="absolute inset-0 flex items-center justify-center text-about_ticket_text font-bold text-sm md:text-lg lg:text-2xl font-urbanist"
          style={{ transform: 'translateY(2vw) translateX(-2vw) rotate(-3deg)' }}>
          projects
        </p>
      </div>

      <div className="absolute w-[28vw] max-w-none h-auto" style={{ transform: 'translateX(60vw) translateY(40vw) rotate(10deg)' }}>
        <img src="/images/AboutTicket.png" alt="Ticket" className="w-full h-auto object-cover" />
        <p className="absolute inset-0 flex items-center justify-center text-about_ticket_text font-bold text-lg md:text-xl lg:text-4xl font-urbanist"
          style={{ transform: 'translateY(-2vw) translateX(-2vw) rotate(-3deg)' }}>
          50+
        </p>
        <p className="absolute inset-0 flex items-center justify-center text-about_ticket_text font-bold text-sm md:text-lg lg:text-2xl font-urbanist"
          style={{ transform: 'translateY(2vw) translateX(-2vw) rotate(-3deg)' }}>
          mentors
        </p>
      </div>

      <div className="absolute w-[28vw] max-w-none h-auto" style={{ transform: 'translateX(35vw) translateY(50vw) rotate(-20deg)' }}>
        <img src="/images/AboutTicket.png" alt="Ticket" className="w-full h-auto object-cover" />
        <p className="absolute inset-0 flex items-center justify-center text-about_ticket_text font-bold text-lg md:text-xl lg:text-4xl font-urbanist"
          style={{ transform: 'translateY(-2vw) translateX(-2vw) rotate(-3deg)' }}>
          10+
        </p>
        <p className="absolute inset-0 flex items-center justify-center text-about_ticket_text font-bold text-sm md:text-lg lg:text-2xl font-urbanist"
          style={{ transform: 'translateY(2vw) translateX(-2vw) rotate(-3deg)' }}>
          sponsors
        </p>
      </div>

      {/* About header and description */}
      <div className="absolute z-1 left-[58vw] flex flex-col items-center" style={{ width: '40vw'}}>
        <img src="/images/AboutHeader.png" alt="About" className="h-[10vw] max-w-full" />
        <p
          className=" text-about_ticket_text font-urbanist font-bold text-center flex items-center justify-center"
          style={{
            width: '100%',
            height: '100%',
            fontSize: '2vw', // Adjust this value based on how large you want the text
            lineHeight: '3vw', // Adjust line height as needed
          }}
        >
          Hackduke is the premier intercollegiate hackathon for social good. We unite passionate students
          to create meaningful solutions for social impact.
        </p>
      </div>
    </div>
  );
};
