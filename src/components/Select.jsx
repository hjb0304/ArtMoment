import React from "react";

function Select({ children }) {
  return (
    <select className="border-1 rounded h-8 w-max min-w-24 px-2">
      {children}
    </select>
  );
}

export default Select;
