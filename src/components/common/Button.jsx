export default function Button({
    children,
    text,
    icon,
    iconPosition = "left",
    onClick,
    type = "button",
    variant = "primary",
    className = "",
    disabled = false,
}) {
    const variants = {
        primary: `
            font-bold
            text-[16px]
            text-white
            rounded-[10px]
            [background:linear-gradient(90deg,#DD5690,#FDB95F)_padding-box,linear-gradient(180deg,#F26A96_0%,#C4268E00_100%)_border-box]
            shadow-[0px_6px_18px_0px_#F2A69C]
        `,

        secondary: `
            bg-[linear-gradient(113.87deg,rgba(221,86,144,0.1)_14.81%,rgba(252,181,97,0.1)_88.76%)]
            text-[#24262D]
            hover:text-black
            font-medium
        `,

        outline: `
            border
            border-[#DD5690]
            text-[#DD5690]
            hover:bg-pink-50
        `,

        ghost: `
            bg-transparent
            text-gray-600
            hover:bg-gray-100
        `,

        icon: `
            gradient-border-button
            font-bold
            text-[16px]
            text-white
            h-[60px]
            w-[60px]
            rounded-full
            flex
            items-center
            justify-center
        `,
    };

    const sizes = {
        primary: "h-[60px] w-fit px-[50px] rounded-[10px]",
        secondary: "h-[46px] w-fit px-[30px] rounded-[10px]",
        outline: "h-[60px] w-fit px-[50px] rounded-[10px]",
        ghost: "h-[60px] w-fit px-[50px] rounded-[10px]",
        icon: "h-[67px] w-[67px] rounded-full p-0",
    };

    const buttonText = children || text;

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
                font-syne
                cursor-pointer
                text-[16px]
                leading-[140%]
                tracking-normal
                inline-flex
                items-center
                justify-center
                gap-2
                transition-all
                duration-300
                disabled:opacity-50
                disabled:cursor-not-allowed
                whitespace-nowrap

                ${sizes[variant]}
                ${variants[variant]}

                ${className}
            `}
        >
            {iconPosition === "left" && icon}

            {buttonText}

            {iconPosition === "right" && icon}
        </button>
    );
}