export default function Typography({
    text,
    type,
    className,
    size,
} : {
    text: string;
    type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
    className: string;
    size: "xs" | "sm" | "md" | "lg" | "xl" ;
}) {
    const Tag = type;
    const sizeClass = size ? `text-${size}` : "";
    return (
        <Tag className={`${className} ${sizeClass}`}>{text}</Tag>
    )
}