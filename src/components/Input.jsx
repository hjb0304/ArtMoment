import React, { forwardRef } from "react";

const Input = forwardRef(function Input({ ...props }, ref) {
  return <input className="input" {...props} ref={ref}></input>;
});

export default Input;
