import React from "react";

const BUTTON_VARIANTS = {
  primary: "bg-blue-600 text-white border border-blue-600 hover:bg-blue-700",
  outline: "bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white",
  danger: "bg-red-600 text-white border border-red-600 hover:bg-red-700",
  success: "bg-green-600 text-white border border-green-600 hover:bg-green-700",
  ghost: "bg-transparent text-gray-600 border border-transparent hover:bg-gray-200",
};

const BUTTON_SIZES = {
  small: "px-3 py-1 text-sm",
  medium: "px-5 py-2 text-base",
  large: "px-6 py-3 text-lg",
  xl: "px-8 py-4 text-xl",
};

const Button = ({ children, variant = "primary", size = "medium", onClick, className = "", ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`${BUTTON_VARIANTS[variant] || BUTTON_VARIANTS.primary} 
                  ${BUTTON_SIZES[size] || BUTTON_SIZES.medium} 
                  font-semibold rounded-md transition-all duration-300 
                  flex items-center justify-center ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
