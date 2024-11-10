export const Panel = ({ children, className = '' }) => {
    return (
        <div className={`relative w-full h-[60vw] ${className}`}> {/* Relative so that we can position children with offsets */}
            {children}
        </div>
    );
};