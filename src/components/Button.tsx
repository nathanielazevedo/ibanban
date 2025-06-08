import { Button as MUIButton } from "@mui/material";
import React from "react";

const Button = ({
  styles,
  text,
}: {
  styles?: React.CSSProperties;
  text?: string;
}) => (
  <MUIButton
    variant="contained"
    sx={{
      background: "linear-gradient(to right, #4facfe, #00f2fe)",
      borderRadius: "10px",
      fontFamily: "Poppins, sans-serif",
      fontWeight: 500,
      fontSize: "18px",
      textTransform: "none",
      px: 2,
      // py: 1,
      ...styles,
    }}
  >
    {text ?? "Start Learning"}
  </MUIButton>
);

export default Button;
