export default function Button({
    text,
    onClick,
    type,
} : {
    text: string;
    onClick: () => void;
    type: "primary" | "secondary" | "text";
}) {
    const typeClass = type ? `btn-${type}` : "";
    return (
        <button className={typeClass} onClick={onClick}>{text}</button>
    )
}