import { H1, P } from "./typography";
import { Panel } from "./panel";

export const About = () => {
  return (
    <Panel>
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
      <div className="z-50"> {/* Group into another component */}
        <div style={{ transform: 'translateX(12vw) translateY(20vw) rotate(-3deg)' }}> {/* This needs to be fixed or z values won't work */}
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
      </div>
      
      <img
        src="/images/Ticket Lighting.png"
        alt="Ticket Gradient Lighting"
        className="absolute w-[70vw] h-auto transform z-0 left-[10vw] top-0"
      />

      {/* About header and description */}

      <div className="absolute z-1 w-[30vw] right-[6vw] top-[7vw] text-center">
        <H1>About</H1>
        <P>
          Hackduke is the premier intercollegiate hackathon for social good. We unite passionate students
        to create meaningful solutions for social impact.
        </P>
      </div>
    </Panel>
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