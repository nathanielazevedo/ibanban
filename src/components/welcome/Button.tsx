import React from "react";

const Button = ({ styles, text }: { styles?: any; text?: any }) => (
  <button
    type="button"
    className={`py-2 px-4 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
  >
    {text ? text : "Get Started"}
  </button>
);

export default Button;
