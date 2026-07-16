export default function Typography({
    children,
    as = "p",
    size = "base",
    font = "normal",
    weight = "normal",
    color = "",
    align = "",
    className = "",
    ...props
}) {
    const Tag = as;

    const sizeClasses = {
        xs: "text-xs",
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
        "3xl": "text-3xl",
        "4xl": "text-4xl",
    };

    const weightClasses = {
        light: "font-light",
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
        extrabold: "font-extrabold",
    };

    const classes = [
        sizeClasses[size],
        `font-${font}`,
        weightClasses[weight],
        color,
        align,
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <Tag className={classes} {...props}>
            {children}
        </Tag>
    );
}