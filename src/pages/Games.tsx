import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import bg from "../assets/gamebg.jpeg";
import planetDefender from "../assets/planetDefender.png";
import spellingNinja from "../assets/spellingNinja.png";

const Main = () => {
  const location = useLocation();
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: "200px",
        background: `url(${bg}) no-repeat center center fixed`,
      }}
    >
      <Box
        sx={{
          minWidth: "70vw",
          width: "70vw",
          padding: "50px 30px",
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "row",
        }}
      >
        <Link to={`${location.pathname}/spellingNinja`}>
          <img
            src={spellingNinja}
            className="border"
            style={{
              background: "linear-gradient(to right, red, purple",
              height: "255px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          />
        </Link>
        <Link to={`${location.pathname}/planetDefender`}>
          <img
            src={planetDefender}
            className="border"
            style={{
              background: "linear-gradient(to right, red, purple",
              height: "255px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          />
        </Link>
      </Box>
    </div>
  );
};

export default Main;
