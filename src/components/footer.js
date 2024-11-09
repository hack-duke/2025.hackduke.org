import { Parallax } from 'react-scroll-parallax';

export const Footer = () => {
    return (
        <div className='relative w-full text-white'>
            <Parallax speed={5}>
                <img 
                    src="/images/Background Left Cliff.png" 
                    className='absolute z-0 h-auto w-[50rem] bottom-[0rem] left-[-2rem]' 
                    alt="Background Left Cliff"/>
                <img 
                    src="/images/Background Right Cliff.png" 
                    className='absolute z-0 h-auto w-[50rem] bottom-[0rem] right-[-2rem]' 
                    alt="Background Left Cliff"/>

            </Parallax>

            <Parallax speed={10}>
                <img 
                src="/images/Coral Cliff.png" 
                className='absolute z-10 h-auto w-[35rem] bottom-[0rem] left-[-1.23rem]' 
                alt="Coral Cliff"/>

                <img 
                src="/images/Blue Coral.png" 
                className='absolute z-40 h-auto w-[20rem] bottom-[20rem] left-[-1rem] opacity-50' 
                alt="Blue Coral"/>

                <img 
                src="/images/Purple Coral.png" 
                className='absolute z-40 h-auto w-[15rem] bottom-[20rem] left-[3rem] opacity-50' 
                alt="Purple Coral"/>
            </Parallax>

            <Parallax speed={15}>
                <img 
                src="/images/Crab Cliff.png" 
                className='absolute z-10 h-auto w-[50rem] bottom-[-3rem] left-[-2rem]' 
                alt="Crab Cliff"/>

                <img 
                src="/images/Crab.png" 
                className='absolute z-30 h-auto w-[15rem] bottom-[0rem] left-[3.23rem] opacity-30' 
                alt="Crab Cliff"/>  
            </Parallax>

            <Parallax speed={20}>
                <img 
                src="/images/AnglerFish.png" 
                className='absolute z-50 h-auto w-[43rem] bottom-[15rem] right-[5rem]' 
                alt="Angler Fish"/>

                <img 
                src="/images/Spaceship.png" 
                className='absolute z-30 h-auto w-[33rem] bottom-[0rem] right-[5rem]' 
                alt="Spaceship"/>

                <img 
                src="/images/CliffCoveringSpaceship.png" 
                className='absolute z-40 h-auto w-[70rem] bottom-[0rem] right-[-1.23rem]' 
                alt="Cliff Covering Spaceship"/>

                <img 
                src="/images/SpaceshipLighting.png" 
                className='absolute z-20 h-auto w-[78rem] bottom-[0rem] right-[1rem]' 
                alt="Space Lighting"/>
            </Parallax>

            <p className='absolute z-50 bottom-[0.5vw] left-1/2 -translate-x-1/2 text-center text-lg'>
                Made with 🩷 by the HackDuke team
            </p>
        </div>
    )
}