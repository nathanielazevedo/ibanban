import { Box } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";

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
        justifyContent: "center",
      }}
    >
      <Link to={`${location.pathname}/planetDefender`}>
        <div
          className="border"
          // onClick={() => setTab("planet")}
          style={{
            background: "linear-gradient(to right, red, purple",
            padding: "3px",
            height: "75px",
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
            Planet Defender
          </Box>
        </div>
      </Link>
      <div
        className="border"
        // onClick={() => setTab("sentences")}
        style={{
          background: "linear-gradient(to right, red, purple",
          padding: "3px",
          height: "75px",
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
            padding: "3px",
          }}
        >
          Sound Scape
        </Box>
      </div>
    </div>
  );
};

export default Main;