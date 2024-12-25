import { Panel } from "./panel"
import { H1 } from "./typography"

const Track = ({ title, image_src, image_alt, widthClass, leftClass, bottomClass, rightClass, topClass, imageWidthClass }) => {
  // Pass class names instead of, e.g., vw units because Tailwind has issues with template literals
  return (
    <div className={"absolute z-20 flex flex-col space-y-2 items-center " + [widthClass, leftClass, bottomClass, rightClass,topClass].join(" ")}>
      <h3 className="text-sm md:text-3xl text-white text-center">{title}</h3>
      <img src={image_src} alt={image_alt} className={imageWidthClass}/>
    </div>
  )

}


export const Tracks = () => {
  // TODO: Lighting
  // TODO: Responsiveness
  return (
    <Panel>
      <H1 className="text-center">Tracks</H1>
      <Track 
        title="Interactive Media"
        image_src="/images/TracksCrab.svg"
        image_alt="Crab"
        widthClass="w-[35vw]"
        imageWidthClass="w-[13vw] animate-pulse"
        rightClass="right-[20vw]"
        bottomClass="bottom-[10vw]"
        leftClass="left-auto"
        topClass="top-auto"
      />
      {/* <img src="/images/TracksCrab.svg" alt="Crab" className="absolute z-20 w-[13vw] right-[7.5vw] bottom-[5vh]" /> */}

      <Track 
        title="Finance" 
        image_src="/images/TracksGenericFish.svg" 
        image_alt="Generic Fish" 
        widthClass="w-[18vw]" 
        imageWidthClass="w-[18vw] animate-pulse"
        leftClass="left-[10vw]" 
        bottomClass="bottom-[10vw]" 
        rightClass="right-auto" 
        topClass="top-auto" 
      />

      <Track
        title="Sustainability"
        image_src="/images/TracksTurtle.svg"
        image_alt="Turtle"
        widthClass="w-[12vw]"
        imageWidthClass="w-[12vw] animate-pulse"
        leftClass="left-[25vw]"
        topClass="top-[15vw]"
        rightClass="right-auto"
        bottomClass="bottom-auto"
      />

      <Track
        title="Health"
        image_src="/images/TracksWhale.svg"
        image_alt="Whale"
        widthClass="w-[25vw]"
        imageWidthClass="w-[25vw] animate-pulse"
        rightClass="right-[15vw]"
        topClass="top-[15vw]"
        leftClass="left-auto"
        bottomClass="bottom-auto"
      />

    </Panel>
  )
}
