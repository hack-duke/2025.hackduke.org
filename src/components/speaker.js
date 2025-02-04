import { Panel } from "./panel";
import { H1 } from "./typography";

export const Speaker = () => {
  return (
    <Panel className="flex flex-col items-center justify-center min-h-screen">
      {/* Header */}
      <H1 className="-mb-8 text-center">Speakers</H1>

      {/* Sharks container, shifted left */}
      <div className="w-full flex justify-center">
        <div
          className="flex justify-center items-start max-w-4xl"
          style={{ transform: "translateX(-30%)" }} // shifts the sharks left
        >
          {/* First Shark (left, normal) scaled up with name below */}
          <div className="flex flex-col items-center p-2 -mt-12" style={{ transform: "scale(1.3)" }}>
          <SpeakerShark speaker_name="Kyle Brown.JPG" />
          <h3 className="text-sm md:text-3xl text-white text-center">Kyle Brown</h3>
          </div>
          {/* Second Shark (right, flipped horizontally, lowered, and scaled up) with name below */}
          <div className="flex flex-col items-center p-2 mt-20" style={{ transform: "scale(1.3) scaleX(-1)" }}>
            <SpeakerShark speaker_name = "Jacob Yackenovich.png"/>
            <h3 className="text-sm md:text-3xl text-white text-center" style={{ transform: "scaleX(-1)" }}>Jacob Yackenovich</h3>
          </div>
        </div>
      </div>

      {/* Decorative Fish image */}
      <img
        src="/images/fishy.png"
        alt="fish"
        className="z-20 h-[15vw] mt-8"
      />
    </Panel>
  );
};

export const SpeakerShark = ({ speaker_name }) => {
  // Adjust specific styles for Kyle
  const isKyle = speaker_name === "Kyle Brown.JPG";

  return (
    <div style={{ position: "relative", width: "100%" }}>
      {/* Shark Frame */}
      <img
        src="/images/SpeakerSharkFrame.png"
        alt="Speaker Shark Frame"
        style={{ width: "100%" }}
      />

      {/* Shark Teeth Overlay */}
      <img
        src="/images/SpeakerSharkTeethOverlay.png"
        alt="Speaker Shark Teeth"
        style={{
          position: "absolute",
          top: "39%",
          left: "48%",
          transform: "translateX(-50%)",
          width: "49%",
          zIndex: 10,
        }}
      />

      {/* Speaker Image inside Shark */}
      <img
        src={`/images/${speaker_name}`}
        alt="Speaker"
        style={{
          position: "absolute",
          top: isKyle ? "45%" : "43%",
          left: "48%",
          transform: "translateX(-50%)",
          width: isKyle ? "40%" : "40%",  // Reduce size for Kyle
          height: isKyle ? "41%" : "auto", // Adjust height for Kyle
          borderRadius: "50%",
          objectFit: "cover", // Ensures the image fits properly inside the frame
          objectPosition: isKyle ? "top" : "center", // Prioritize Kyle's head
        }}
      />
    </div>
  );
};
