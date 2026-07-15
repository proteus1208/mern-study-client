export default function Input({
    icon,
    placeholder,
    error,
    value,
    onChange,
} : {
    icon: React.ReactNode;
    placeholder: string;
    error: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}){
    return (
        <input type="text" placeholder={placeholder} value={value} onChange={onChange} />
    )
}