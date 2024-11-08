import { Parallax } from 'react-scroll-parallax';

export const Backdrop = () => {
    return (
        <div className="relative top-0 left-0 w-screen">
            <Parallax speed={-5}>
                <img src="/images/WallsBack.png" alt="Background Wall" className="absolute top-0 left-0 w-screen h-auto z-0" />
            </Parallax>
            <Parallax speed={-15}>
                <img
                    src="/images/RightCliffFrontTop.png"
                    alt="right front top cliff"
                    className="absolute right-0 w-[20vw] max-w-none h-auto z-0 transform"
                    style={{ transform: 'translateY(10vw)' }}
                />
                <img
                    src="/images/LeftCliffFrontTop.png"
                    alt="left front top cliff"
                    className="absolute left-0 w-[20vw] max-w-none h-auto z-0 transform"
                    style={{ transform: 'translateY(10vw)' }}
                />
                <img
                    src="/images/AboutRedCoral.png"
                    alt="Red Coral decoration"
                    className="absolute left-0 w-[25vw] max-w-none h-auto z-0"
                    style={{ transform: 'translateY(20vw) translateX(2vw)' }}
                />
                <img
                    src="/images/AboutLeftSpeaker.png"
                    alt="About Left Speaker"
                    className="absolute left-2 w-[10vw] max-w-none h-auto z-1"
                    style={{ transform: 'translateY(32vw) translateX(5vw)' }}
                />
                <img
                    src="/images/AboutYellowCoral.png"
                    alt="Yellow Coral"
                    className="absolute left-5 w-[10vw] max-w-none h-auto z-1"
                    style={{ transform: 'translateY(35vw) translateX(3vw)' }}
                />
                <img src="/images/ScheduleLeftSpeaker.png" alt="About Left Speaker"
                    className='absolute left-5 w-auto h-[18.75rem] z-1'
                    style={{ transform: 'translateY(200rem)' }} />

                <img src="/images/ScheduleYellowCoral.png" alt="Yellow Coral"
                    className='absolute left-0 w-auto h-[18.75rem] z-1'
                    style={{ transform: 'translateY(205rem)' }} />

                <img src="/images/ScheduleRightSpeaker.png" alt="About Left Speaker"
                    className='absolute right-5 w-auto h-[18.75rem] z-1'
                    style={{ transform: 'translateY(160rem)' }} />
            </Parallax>
        </div>
    );
}