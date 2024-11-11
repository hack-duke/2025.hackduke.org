import { Panel } from "./panel"
import { H1 } from "./typography"

const Track = ({ title, image_src, image_alt, widthClass, leftClass, bottomClass, rightClass, topClass, imageWidthClass }) => {
  // Pass class names instead of, e.g., vw units because Tailwind has issues with template literals
  return (
    <div className={"absolute z-20 flex flex-col space-y-2 items-center" + [widthClass, leftClass, bottomClass, rightClass,topClass].join(" ")}>
      <h3 className="text-3xl text-white text-center">{title}</h3>
      <img src={image_src} alt={image_alt} className={imageWidthClass}/>
    </div>
  )

}


export const Tracks = () => {
  // TODO: Lighting
  // TODO: Responsiveness
  return (
    <Panel className="h-[80vh]">
      <H1 className="text-center">Tracks</H1>
      <Track 
        title="Interactive Media"
        image_src="/images/TracksCrab.svg"
        image_alt="Crab"
        widthClass="w-[20vw]"
        imageWidthClass="w-[13vw]"
        rightClass="right-[7.5vw]"
        bottomClass="bottom-[5vh]"
        leftClass="left-auto"
        topClass="top-auto"
      />
      {/* <img src="/images/TracksCrab.svg" alt="Crab" className="absolute z-20 w-[13vw] right-[7.5vw] bottom-[5vh]" /> */}

      <Track 
        title="Finance" 
        image_src="/images/TracksGenericFish.svg" 
        image_alt="Generic Fish" 
        widthClass="w-[18vw]" 
        imageWidthClass="w-[18vw]"
        leftClass="left-[25vw]" 
        bottomClass="bottom-[3vh]" 
        rightClass="right-auto" 
        topClass="top-auto" 
      />

      <Track
        title="Sustainability"
        image_src="/images/TracksTurtle.svg"
        image_alt="Turtle"
        widthClass="w-[12vw]"
        imageWidthClass="w-[12vw]"
        leftClass="left-[14vw]"
        topClass="top-[20vh]"
        rightClass="right-auto"
        bottomClass="bottom-auto"
      />

      <Track
        title="Health"
        image_src="/images/TracksWhale.svg"
        image_alt="Whale"
        widthClass="w-[25vw]"
        imageWidthClass="w-[25vw]"
        rightClass="right-[27vw]"
        topClass="top-[20vh]"
        leftClass="left-auto"
        bottomClass="bottom-auto"
      />

    </Panel>
  )
}
