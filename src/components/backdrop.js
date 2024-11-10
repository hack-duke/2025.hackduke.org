import '../App.css'

export const Backdrop = ({ children }) => {
    return (
        <div className="relative gradient-container">
            <div className="top-0 left-0">
                <img
                    src="/images/WallsBack.png"
                    alt="Background Wall"
                    className="absolute top-0 left-0 w-screen h-auto z-0"
                />
                <div className="absolute top-[10vw] left-0">
                    <LeftWall />
                </div>
                <div className='absolute top-[50vw] right-0'>
                    <RightWall />
                </div>
                <img
                    src="/images/AboutLighting.png"
                    alt="lighting for the about section"
                    className="absolute w-full z-0 left-0 top-[-50vw]"
                />
                <img
                    src="/images/Tracks Lighting.png"
                    alt="Tracks Gradient Lighting"
                    className="absolute w-[50vw] z-0 left-[0vw] top-[35vw]"
                />
                <img
                    src="/images/Speaker Lighting.png"
                    alt="Speaker Gradient Lighting"
                    className="absolute w-full z-0 left-0 top-[70vw]"
                />
            </div>
            <div className="bottom-0 left-0">
                <img
                    src="/images/Coral Cliff.png"
                    className='absolute z-10 h-auto w-[35vw] bottom-[10vw] left-0'
                    alt="Coral Cliff"
                />

                <img 
                    src="/images/Blue Coral.png" 
                    className='absolute z-40 h-auto w-[20vw] bottom-[25vw] left-[5vw] opacity-50' 
                    alt="Blue Coral"
                />

                    <img 
                    src="/images/Purple Coral.png" 
                    className='absolute z-40 h-auto w-[15vw] bottom-[25vw] left-[7vw] opacity-50' 
                    alt="Purple Coral"
                />

                <img
                    src="/images/Crab Cliff.png"
                    className='absolute bottom-[-5vw] left-[0vw] z-10 w-[70vw]'
                    alt="Crab Cliff"
                />

                <img 
                    src="/images/Crab.png" 
                    className='absolute z-30 h-auto w-[20vw] bottom-[5vw] left-[30vw] opacity-30' 
                    alt="Crab Cliff"
                />

                <img
                    src="/images/AboutLeftSpeaker.png"
                    alt="About Left Speaker"
                    className="absolute w-[17vw] bottom-[12vw] left-[2vw] z-50 brightness-50"
                />

                <img
                    src="/images/Background Left Cliff.png"
                    alt="Background Left Cliff"
                    className='absolute bottom-0 left-0 z-0 w-[60vw]'
                />

                <img 
                    src="/images/Background Right Cliff.png" 
                    className='absolute z-0 h-auto w-[50vw] bottom-[0vw] right-[-2vw]' 
                    alt="Background Left Cliff"
                />

                <img
                    src="/images/CliffCoveringSpaceship.png"
                    className='absolute z-40 h-auto w-[70vw] bottom-0 right-0'
                    alt="Cliff Covering Spaceship" 
                />

                <img
                    src="/images/SpaceshipLighting.png"
                    className='absolute z-20 h-auto w-[80vw] bottom-0 right-0'
                    alt="Space Lighting" 
                />

                <img 
                    src="/images/AnglerFish.png" 
                    className='absolute z-50 h-auto w-[43vw] bottom-[15vw] right-[5vw]' 
                    alt="Angler Fish"
                />

                <img 
                    src="/images/Spaceship.png" 
                    className='absolute z-30 h-auto w-[33vw] bottom-[0vw] right-[5vw]' 
                    alt="Spaceship"
                />
            </div>
            {children}
        </div>
    );
}

export const AboutSpeakerGroup = () => {
    return (
        <div className="absolute w-[30vw]">
            <img
                src="/images/AboutLeftSpeaker.png"
                alt="About Left Speaker"
                className="absolute w-[60%] max-w-none h-auto z-20"
            />
            <img
                src="/images/AboutRedCoral.png"
                alt="Red Coral decoration"
                className="absolute w-[100%] max-w-none h-auto z-10"
                style={{ transform: 'translateY(-50%)' }}
            />
            <img
                src="/images/AboutYellowCoral.png"
                alt="Yellow Coral"
                className="absolute w-[50%] max-w-none h-auto z-30"
                style={{ transform: 'translateY(40%)' }}
            />
        </div>
    )
}

export const ScheduleLeftSpeakerGroup = () => {
    return (
        <div className="absolute w-[20vw]">
            <img src="/images/ScheduleLeftSpeaker.png" alt="About Left Speaker"
                className='absolute w-[100%] z-10'
            />
            <img src="/images/ScheduleYellowCoral.png" alt="Yellow Coral"
                className='absolute w-[100%] z-20'
                style={{ transform: 'translateY(20%)' }}
            />
        </div>
    )
}

export const LeftWall = () => {
    return (
        <>
            <img
                src="/images/LeftCliffFrontTop.png"
                alt="left front top cliff"
                className="absolute z-10 left-0 w-[20vw] max-w-none h-auto"
            />
            <div className="absolute top-[30vw]">
                <AboutSpeakerGroup />
            </div>
            <div className="absolute top-[180vw]"> {/* Probably should be percentages */}
                <ScheduleLeftSpeakerGroup />
            </div>
        </>
    )
}

export const RightWall = () => {
    return (
        <div className="absolute right-0 w-[20vw]">
            <img
                src="/images/RightCliffFrontTop.png"
                alt="right front top cliff"
                className="absolute z-20 right-0 w-[100%] max-w-none h-auto"
            />
            <img src="/images/ScheduleRightSpeaker.png" alt="About Left Speaker"
                className='absolute z-10 right-[2%] w-auto h-[18.75vw]'
                style={{ transform: 'translateY(800%)' }}
            />
            <img
                src="/images/Starfish.png"
                alt="starfish"
                className="absolute z-30 right-[40%] h-[18.75vw]"
                style={{ transform: 'translateY(940%)' }}
            />
        </div>
    )
}