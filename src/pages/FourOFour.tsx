import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/welcome/Button";

const FourOFour = () => {
  return (
    <div className="h-[90vh] flex flex-col items-center justify-center align-center">
      <Typography variant="h1">You lost?</Typography>
      <Link to="/ibanban/map">
        <Button text="Go Home" styles="mt-16" />
      </Link>
    </div>
  );
};

export default FourOFour;
