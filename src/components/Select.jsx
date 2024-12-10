import React, { forwardRef } from "react";

const Select = forwardRef(({ children }, props, ref) => {
  return (
    <select className="border-1 rounded h-8 w-max min-w-24 px-2" {...props}>
      {children}
    </select>
  );
});

export default Select;
