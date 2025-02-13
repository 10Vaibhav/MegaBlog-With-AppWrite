import React from "react";

function Button({
    children,
    type = "button",
    bgColor = "bg-emerald-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button 
            className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 hover:bg-emerald-700 ${className}`} 
            {...props}
        >
            {children}
        </button>
    )
}

export default Button;
