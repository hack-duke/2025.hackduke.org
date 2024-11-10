export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen  bg-gradient-to-b from-home_bg1 to-home_bg2 text-white">
      <img className="z-20 flex object-scale-down max-h-full h-48" src="/images/HackDukeLogo.png" alt="Hack Duke"></img>
      <img src="/images/Waves.png" alt="Description" className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex-grow" />
      <img src="/images/Buoy.png" alt="Description" className="z-10 absolute bottom-[10rem] right-[-17rem] transform -translate-x-1/2 w-auto h-auto scale-150" />
      <img src="/images/HomeStars.png" alt="Description" className="order-first absolute top-12 left-1/2 transform -translate-x-1/2 w-full max-h-45" />
      <img 
        src="/images/CodeForGood.png" 
        alt="Code For Good" 
        className="z-50 absolute-top-0 w-60" 
      />
      <img 
        src="/images/Date.png" 
        alt="Description" 
        className="z-50 absolute-top-0 w-50" 
      />
      <div className="mt-8">
        <button className="bg-purple-500 px-6 py-3 rounded-full text-white shadow-lg">Apply Now!</button>
      </div>
    </div>
  )
}


