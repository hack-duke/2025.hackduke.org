export const Backdrop = () => {
    return (
        <div className="relative"> { /* Ensures the graphics are positioned under the homepage */}
            <div className="top-0 left-0 w-full">
                <img 
                    src="/images/WallsBack.png" 
                    alt="Background Wall" 
                    className="absolute top-0 left-0 w-screen h-auto z-0" 
                />
                <div style={{ transform: 'translateY(10vw)' }}> {/* Maybe move this into component? */}
                    <LeftWall/>
                </div>
                <div style={{ transform: 'translateY(60vw)' }}>
                    <RightWall/>
                </div>
            </div>
        </div>
    );
}

export const AboutSpeakerGroup = () => {
    return(
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
                <AboutSpeakerGroup/>
            </div>
            <div className="absolute top-[180vw]"> {/* Probably should be percentages */}
                <ScheduleLeftSpeakerGroup/>
            </div>
            <img 
                src="/images/Background Left Cliff.png" 
                alt="Background Left Cliff"
                className='absolute z-0 w-[50vw] top-[220vw]' 
            /> {/* Would love for this to be attached to the bottom; seems like z-index problems if not in same class*/}
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
        </div>
    )
}