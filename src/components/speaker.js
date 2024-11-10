import { Panel } from "./panel";
import { H1, P } from "./typography";

export const Speaker = () => {
  return (
    <Panel>
      <div className="absolute z-20 w-[40vw] right-[6vw] top-[7vw] text-center">
        <H1>Speaker</H1>
        <P>
          Hackduke is the premier intercollegiate hackathon for social good. We unite passionate students to create meaningful solutions for social impact.
          Hackduke is the premier intercollegiate hackathon for social good. We unite passionate students to create meaningful solutions for social impact.
          Hackduke is the premier intercollegiate hackathon for social good. We unite passionate students to create meaningful solutions for social impact.
        </P>
      </div>

      <div className="absolute w-[60vw] left-[-7vw] top-[-5vw]">
        <SpeakerShark />
      </div>

      <img
        src="/images/fishy.png"
        alt="fish"
        className="absolute z-20 h-[15vw]"
      />

    </Panel>
  );
};

export const SpeakerShark = () => {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <img
        src="/images/SpeakerSharkFrame.png"
        alt="Speaker Shark Frame"
        style={{ width: '100%' }}
      />
      <img
        src="/images/SpeakerSharkTeethOverlay.png"
        alt="Speaker Shark Teeth"
        style={{
          position: 'absolute',
          top: '39%',
          left: '48%',
          transform: 'translateX(-50%)',
          width: '49%',
          zIndex: 10,
        }}
      />
      <img
        src="/images/Speaker.png"
        alt="Speaker"
        style={{
          position: 'absolute',
          top: '43%',
          left: '48%',
          transform: 'translateX(-50%)',
          width: '43%',
          borderRadius: '50%',
        }}
      />
    </div>
  );
}