export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-gradient-to-b from-home_bg1 to-home_bg2 text-white">
      <img className="z-20 flex object-scale-down max-h-full h-48" src="/images/HackDukeLogo.png" alt="Hack Duke"></img>
      <img src="/images/Waves.png" alt="Description" className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-full max-h-45 flex-grow" />
      <img src="/images/Buoy.png" alt="Description" className="order-first absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-h-45" />
      <img src="/images/HomeStars.png" alt="Description" className="order-first absolute top-12 left-1/2 transform -translate-x-1/2 w-full max-h-45" />
      <img src="/images/Blur1.png" alt="Description" className="z-100 absolute top-12 left-1/2 transform -translate-x-1/2 w-full max-h-45" />
      <p className="text-xl mb-8">Code for Good</p>
      <p className="text-lg">02.07 - 02.09</p>
      <div className="mt-8">
        <button className="bg-purple-500 px-6 py-3 rounded-full text-white shadow-lg">Apply Now!</button>
      </div>
    </div>
  )
}
