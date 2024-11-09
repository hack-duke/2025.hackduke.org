import { Parallax } from 'react-scroll-parallax';

export const Backdrop = () => {
    return (
        <div className="relative top-0 left-0 w-full">
            <Parallax speed={10} startScroll={0} endScroll={2000}>
                <img src="/images/WallsBack.png" alt="Background Wall" className="absolute top-0 left-0 w-screen h-auto z-0" />
            </Parallax>
            <Parallax speed={50} startScroll={0} endScroll={6000}>
                <img
                    src="/images/RightCliffFrontTop.png"
                    alt="right front top cliff"
                    className="absolute z-10 right-0 w-[20vw] max-w-none h-auto transform"
                    style={{ transform: 'translateY(40vw)' }}
                />
                <img
                    src="/images/LeftCliffFrontTop.png"
                    alt="left front top cliff"
                    className="absolute z-10 left-0 w-[20vw] max-w-none h-auto transform"
                    style={{ transform: 'translateY(-10vw)' }}
                />
                <img
                    src="/images/AboutRedCoral.png"
                    alt="Red Coral decoration"
                    className="absolute left-0 w-[25vw] max-w-none h-auto z-20"
                    style={{ transform: 'translateY(10vw) translateX(2vw)' }}
                />
                <img
                    src="/images/AboutLeftSpeaker.png"
                    alt="About Left Speaker"
                    className="absolute left-2 w-[10vw] max-w-none h-auto z-20"
                    style={{ transform: 'translateY(22vw) translateX(5vw)' }}
                />
                <img
                    src="/images/AboutYellowCoral.png"
                    alt="Yellow Coral"
                    className="absolute left-5 w-[10vw] max-w-none h-auto z-20"
                    style={{ transform: 'translateY(25vw) translateX(3vw)' }}
                />
                <img src="/images/ScheduleLeftSpeaker.png" alt="About Left Speaker"
                    className='absolute left-5 w-auto h-[18.75vw] z-20'
                    style={{ transform: 'translateY(190vw)' }} />

                <img src="/images/ScheduleYellowCoral.png" alt="Yellow Coral"
                    className='absolute left-0 w-auto h-[18.75vw] z-20'
                    style={{ transform: 'translateY(195vw)' }} />

                <img src="/images/ScheduleRightSpeaker.png" alt="About Left Speaker"
                    className='absolute right-5 w-auto h-[18.75vw] z-0'
                    style={{ transform: 'translateY(190vw)' }} />
            </Parallax>
        </div>
    );
}