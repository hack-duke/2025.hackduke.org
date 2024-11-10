export const Panel = ({ children }) => {
    return (
        <div className="relative w-screen h-[60vw]"> {/* Relative so that we can position children with offsets*/}
            {children}
        </div>
    );
};