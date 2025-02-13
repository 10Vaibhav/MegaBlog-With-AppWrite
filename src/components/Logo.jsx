import React from "react";

function Logo({width = "100px"}) {
    return (
        <div className="flex items-center gap-2">
            {/* Pencil icon */}
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                className="text-violet-950"
            >
                <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                <path d="M2 2l7.586 7.586"></path>
                <path d="M11 11l-4 4"></path>
            </svg>
            <div className="text-3xl font-bold">
                <span className="text-violet-900">Visionary</span>
                <span className="text-gray-950">Pic</span>
            </div>
        </div>
    )
}

export default Logo;