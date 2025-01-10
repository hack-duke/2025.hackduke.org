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
      <div className="z-50">
        <div className="transform translate-x-[17vw] sm:translate-x-[12vw] translate-y-[20vw] rotate-[-3deg]">
          <Ticket mainText="300+" subText="hackers" />
        </div>
        <div className="transform translate-x-[32vw] sm:translate-x-[35vw] translate-y-[20vw] sm:translate-y-[25vw] rotate-[20deg]">
          <Ticket mainText="100+" subText="projects" />
        </div>
        <div className="transform translate-x-[55vw] sm:translate-x-[60vw] translate-y-[35vw] rotate-[10deg]">
          <Ticket mainText="30+" subText="mentors" />
        </div>
        <div className="transform translate-x-[25vw] translate-y-[27vw] sm:translate-y-[22vw] rotate-[-20deg]">
          <Ticket mainText="$2,000" subText="in prizes" />
        </div>
      </div>

      
      <img
        src="/images/Ticket Lighting.png"
        alt="Ticket Gradient Lighting"
        className="absolute w-[70vw] h-auto transform z-0 left-[10vw] top-0"
      />

      {/* About header and description */}

      <div className="absolute z-1 w-[30vw] right-[3vw] sm:right-[6vw] top-[4vw] sm:top-[7vw] text-center">
        <H1>About</H1>
        <P>
          HackDuke is the premier intercollegiate hackathon for social good. We unite passionate students
        to create meaningful solutions for social impact.
        </P>
      </div>
    </Panel>
  );
};

export const Ticket = ({ mainText, subText }) => { /* We should really convert these to percentages */
  return (
    <div className="float2 absolute w-[27vw] sm:w-[24vw] max-w-none h-auto">
      <img src="/images/AboutTicket.png" alt="Ticket" className="w-full h-auto object-cover" />
      <p className="absolute inset-0 flex items-center justify-center text-about_ticket_text font-bold text-[3vw] font-urbanist 
              transform -translate-y-[1vw] -translate-x-[2vw] rotate-[-3deg]">
        {mainText}
      </p>
      <p className="absolute inset-0 flex items-center justify-center text-about_ticket_text font-bold text-[2vw] font-urbanist
                transform -translate-y-[-1.5vw] -translate-x-[1.5vw] rotate-[-3deg]">
        {subText}
      </p>
    </div>
  );
};