const CountdownRenderer = ({days, hours, minutes, seconds}) => {
    return (
        <div className="text-xl z-50 mt-[1.5] md:max-w-screen max-w-[50%] text-center md:text-2xl">
        <p>{days} days {hours} hours {minutes} minutes {seconds} seconds</p>
        </div>
    )
}

export default CountdownRenderer