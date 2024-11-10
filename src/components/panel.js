export const Panel = ({ children }) => {
    return (
        <div className="relative w-full h-[60vw]"> {/* Relative so that we can position children with offsets*/}
            {children}
        </div>
    );
};