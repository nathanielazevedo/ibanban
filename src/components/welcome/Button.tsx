import React from "react";

const Button = ({ styles, text }: { styles?: any; text?: any }) => (
  <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
  >
    {text ? text : "Get Started"}
  </button>
);

export default Button;
