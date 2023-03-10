import { Box, Typography } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import bg from "../assets/gamebg.jpeg";

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
      <Link to={`${location.pathname}/planetDefender`}>
        <div
          className="border"
          // onClick={() => setTab("planet")}
          style={{
            background: "linear-gradient(to right, red, purple",
            padding: "3px",
            height: "155px",
            borderRadius: "5px",
            cursor: "pointer",
            marginBottom: "50px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#1a1a1a",
              alignItems: "center",
              width: "500px",
              height: "100%",
              borderRadius: "5px",
              marginBottom: "50px",
              padding: "3px",
            }}
          >
            <Typography sx={{ fontSize: "35px" }}>Planet Defender</Typography>
          </Box>
        </div>
      </Link>
    </div>
  );
};

export default Main;
