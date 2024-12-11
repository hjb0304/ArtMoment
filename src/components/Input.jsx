import React, { forwardRef } from "react";

const Input = forwardRef(function Input({ ...props }, ref) {
  return (
    <input
      className="border-1 rounded h-8 flex-1 px-2"
      {...props}
      ref={ref}
    ></input>
  );
});

export default Input;
