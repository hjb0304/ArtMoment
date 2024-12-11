import React, { forwardRef } from "react";

const Select = forwardRef(function Select({ children, ...props }, ref) {
  return (
    <select
      className="border-1 rounded h-8 w-max min-w-24 px-2"
      {...props}
      ref={ref}
    >
      {children}
    </select>
  );
});

export default Select;
