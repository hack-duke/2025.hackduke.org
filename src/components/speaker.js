export const Speaker = () => {
  return (
    <div className="h-screen">
      <div className="absolute z-1" style={{ transform: 'translate(50vw,20vh)', width: '30vw' }}>
        <h1 className='text-white text-8xl font-bold text-center'>
          Speaker
        </h1>
        <p
          className="mt-10 text-about_ticket_text font-urbanist font-semibold text-center text-2xl"
        >
          Hackduke is the premier intercollegiate hackathon for social good. We unite passionate students to create meaningful solutions for social impact.
          Hackduke is the premier intercollegiate hackathon for social good. We unite passionate students to create meaningful solutions for social impact.
          Hackduke is the premier intercollegiate hackathon for social good. We unite passionate students to create meaningful solutions for social impact.
        </p>
      </div>

      <div className="absolute" style={{ transform: 'translate(0vw,0vh)', width: '50vw'}} >
        <SpeakerShark />
      </div>

      <img
        src="/images/fishy.png"
        alt="fish"
        className="absolute z-2"
        style={{ transform: 'translate(-2vw, 2vh)', height: '15vw' }}
      />


      <img
        src="/images/music.svg"
        alt="note"
        className="absolute z-2"
        style={{ transform: 'translate(48vw,2vh)', height: '5vw' }}
      />

      <img
        src="/images/sparkle.png"
        alt="sparkle"
        className="absolute z-2"
        style={{ transform: 'translate(35vw,8vh)', height: '2.5vw' }}
      />

      <img
        src="/images/sparkle.png"
        alt="sparkle"
        className="absolute z-2"
        style={{ transform: 'translate(13vw,25vh)', height: '2.5vw' }}
      />

      <img
        src="/images/sparkle.png"
        alt="sparkle"
        className="absolute z-2"
        style={{ transform: 'translate(8vw,75vh)', height: '2.5vw' }}
      />

      <img
        src="/images/sparkle.png"
        alt="sparkle"
        className="absolute z-2"
        style={{ transform: 'translate(64vw,85vh)', height: '2.5vw' }}
      />


    </div>
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