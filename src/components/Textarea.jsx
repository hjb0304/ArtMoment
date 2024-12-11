import React, { forwardRef } from "react";

const Textarea = forwardRef(function Textarea({ ...props }, ref) {
  return (
    <textarea
      className="border-1 rounded flex-1 h-full p-2"
      {...props}
      ref={ref}
    ></textarea>
  );
});

export default Textarea;
