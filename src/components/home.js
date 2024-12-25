import Countdown from 'react-countdown';

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen  bg-gradient-to-b from-home_bg1 to-home_bg2 text-white overflow-hidden w-full relative max-w-full">
      <img className="z-20 flex object-contain max-h-full h-48" src="/images/HackDuke.png" alt="Hack Duke"></img>
      <h1> Application Closes in</h1>
      <Countdown date={new Date("2025-01-20")}/>

      
      {/* waves */}
      <section className="waves-container bottom-[0vw]">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        {/* <div className="wave wave3"></div>
        <div className="wave wave4"></div> */}
      </section>
      <div className="buoy-wrapper overflow-hidden absolute w-full h-full">
        <img src="/images/Buoy.svg" alt="Description" className="buoy z-10" />
      </div>
      <img src="/images/HomeStars.png" alt="Description" className="motion-preset-slide-down motion-duration-2000 order-first absolute top-12 left-1/2 transform -translate-x-1/2 w-full max-h-45" />
      {/* <img 
        src="/images/CodeForGood.png" 
        alt="Code For Good" 
        className="z-50 absolute-top-0 w-60" 
      /> */}
      {/* <img 
        src="/images/Date.png" 
        alt="Description" 
        className="z-50 absolute-top-0 w-50" 
      /> */}
    </div>
  )
}


