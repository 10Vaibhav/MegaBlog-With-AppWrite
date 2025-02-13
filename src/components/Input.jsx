import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label
          className="block mb-2 text-sm font-medium text-gray-700 pl-1"
          htmlFor={id}
        >
          {label}
        </label>
      )}

      <input
        type={type}
        className={`w-full px-4 py-3 rounded-lg bg-white text-gray-800 
        border border-gray-200 
        placeholder-gray-400
        transition-all duration-300 ease-in-out
        focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none
        hover:border-emerald-300
        ${type === "file" ? "file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100" : ""}
        ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;
