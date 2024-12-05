import React from "react";

function Button({
  children,
  color = "secondary",
  isOutline,
  isIcon,
  ...props
}) {
  return (
    <button
      className={`rounded text-sm 
      bg-${isOutline ? "white" : color} 
      text-${isOutline ? color : "white"} 
      ${isOutline && `border-${color} border-1`} 
      ${!isIcon ? "px-4 h-9" : "w-11 h-11"}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
