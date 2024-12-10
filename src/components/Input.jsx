import React, { forwardRef } from "react";

const Input = forwardRef(({ children }, props, ref) => {
  return (
    <input className="border-1 rounded h-8 flex-1 px-2" {...props}></input>
  );
});

export default Input;
