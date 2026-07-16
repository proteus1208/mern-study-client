import { forwardRef } from "react";

const variants = {
    outline:
        "border border-[#F8E6D9] bg-white focus:border-orange-400 focus:ring-2 focus:ring-orange-100",
    filled:
        "border border-transparent bg-gray-100 focus:bg-white focus:border-orange-400",
    ghost:
        "border border-transparent bg-transparent focus:border-orange-400",
};

const sizes = {
    sm: "h-10 px-3 text-sm",
    md: "h-12 px-4 text-base",
    lg: "h-[60px] px-5 text-lg",
};

const radius = {
    none: "rounded-none",
    sm: "rounded-md",
    md: "rounded-lg",
    lg: "rounded-xl",
    full: "rounded-full",
};

export default forwardRef(function Input(
    {
        icon: Icon,
        iconPosition = "left",

        variant = "outline",
        size = "lg",
        rounded = "lg",

        label,
        helperText,
        error,

        fullWidth = true,
        disabled = false,
        required = false,

        className = "",
        inputClassName = "",

        ...props
    },
    ref
) {
    const wrapperClasses = [
        "flex items-center gap-3 transition-all duration-200",
        variants[variant],
        sizes[size],
        radius[rounded],
        fullWidth && "w-full",
        disabled && "opacity-60 cursor-not-allowed",
        error &&
            "border-red-500 focus-within:border-red-500 focus-within:ring-red-100",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <div className={fullWidth ? "w-full" : ""}>
            {label && (
                <label className="mb-2 block text-sm font-Cairo font-medium text-[#24262D]">
                    {label}
                    {required && (
                        <span className="ml-1 text-red-500">*</span>
                    )}
                </label>
            )}

            <div className={`${wrapperClasses}`}>
                {Icon && iconPosition === "left" && (
                    <>
                        <Icon className="h-5 w-5 text-[#24262D] shrink-0" />
                        <div className="h-5 w-px bg-[#F8E6D9]" />
                    </>
                )}

                <input
                    ref={ref}
                    disabled={disabled}
                    className={[
                        "flex-1 bg-transparent outline-none font-Cairo placeholder:text-[#24262D]",
                        inputClassName,
                    ]
                        .filter(Boolean)
                        .join(" ")}
                    {...props}
                />

                {Icon && iconPosition === "right" && (
                    <Icon className="h-6 w-6 text-gray-500 shrink-0" />
                )}
            </div>

            {(helperText || error) && (
                <p
                    className={`mt-2 text-sm ${
                        error ? "text-red-500" : "text-gray-500"
                    }`}
                >
                    {error || helperText}
                </p>
            )}
        </div>
    );
});