import React, { forwardRef } from "react";

const Textarea = forwardRef(({ children }, props, ref) => {
  return (
    <textarea
      className="border-1 rounded flex-1 h-full p-2"
      {...props}
    ></textarea>
  );
});

export default Textarea;
