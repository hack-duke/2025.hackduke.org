const Typography = ({ as: Component = 'p', children, className, ...props }) => {
    return (
        <Component className={className} {...props}>
            {children}
        </Component>
    );
};

export const H1 = ({ children, className = '', ...props }) => (
    <Typography as="h1" className={`text-white font-bold glow text-[7vw] ${className}`} {...props}>
        {children}
    </Typography>
);

export const P = ({ children, className = '', ...props }) => (
    <Typography as="p" className={`text-about_ticket_text font-semibold text-[1.7vw] ${className}`} {...props}>
        {children}
    </Typography>
);